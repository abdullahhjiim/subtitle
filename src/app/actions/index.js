"use server"

import { blogModel } from "@/models/blog-model";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { auth, signIn } from "../../../auth";


export async function login(data) {
    try {
       const response = await signIn("credentials", {...data,
            redirect: false
        })
        return response;
    } catch(error) {
        throw new Error(error);
    }
}


export async function postComment(data, blogId){
    const session = await auth();

    if(!session?.user) {
        return new NextResponse("User not authrize", {status : 401})
    }

    try {

        await dbConnect();
        
        const userdata = await userModel.findOne({"email" : session?.user?.email});

        const author = {
            _id : userdata?._id,
            name : userdata?.name
        }

        const blogData = await blogModel.findOne({_id : blogId});

        data.author = author;
        let comments = blogData.comments;
        comments.push(data)
        blogData.comments = comments;

        return  await blogData.save();
        
    } catch(error) {
        throw new Error(error);
    }
}


export async function getFavouriteBlogs() {

    try {
      const session = await auth();
      if (!session) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      await dbConnect();
  
      const userData = await userModel.findOne({ "email": session?.user?.email });
  
      const blogs = await blogModel
        .find({ _id: { $in: userData?.favouriteBlogs } })
        .sort({ createdAt: 1 })
        .limit(5);
  
      return blogs;
    } catch (err) {
        throw new Error(err);
    }
}

export async function getProfileData (profileId) {
    try{

        const user = await userModel.findOne({"_id" : profileId});
        const blogs = await blogModel.find({ 'author._id': user._id });


        return {user, blogs};

    } catch(err) {
        throw new Error(err);
    }
}

// export async function getYourBlogs(blogids) {
//     try {
  
//       await dbConnect();
  
//       const blogs = await blogModel
//         .find({ _id: { $in: blogids } })
//         .sort({ createdAt: 1 })
//         .limit(5);
  
//       return blogs;
//     } catch (err) {
//         throw new Error(err);
//     }
// }