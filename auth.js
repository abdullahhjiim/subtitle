import mongoClientPromise from "@/database/mongoClientPromise";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { revalidatePath } from "next/cache";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, {databaseName: process.env.ENVIRONMENT }),
    session: {
        strategy : "jwt"
    },

    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials) {
                if (credentials == null) return null;

                await dbConnect();
                try {
                    const user = await userModel.findOne({"email": credentials.email});
                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if(isMatch) {
                            revalidatePath('/dashboard');
                            return user;
                        } else {
                            throw new Error('Email or password mismatch');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch(error) {
                    console.log(error);
                    throw new Error(error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {

         jwt({ token, user }) {
            if (user) { 
              token.id = user.id
              token.type = user.type

            }
            return token
          },

          session (session, user) {
          }
        
    }
})