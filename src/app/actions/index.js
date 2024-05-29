"use server"

import { blogModel } from "@/models/blog-model";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdInArray } from "@/utils/data-util";
import { revalidatePath } from "next/cache";
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


export async function uploadFile(formData, acceptFiles = [], fileSize = 1000,  fileDirectory = './public/uploads') {
    try {
  
      const session = await auth();
  
      if(!session) {
          return {status : 401, message : 'Unauthrized'};
      }
  
      const file = formData.get("file");

      const { originalname, mimetype, size } = file;

      if(!acceptFiles.find((item) => (item == mimetype))) {
        return {status : 422, message : 'File not supported'};
      }

      if(size > fileSize) {
        return {status : 422, message : 'Maximum file size'+ fileSize + 'kb'};
      }


      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
  
      await fs.mkdir(fileDirectory, { recursive: true });
      const filePath = `${fileDirectory}/${Date.now()}_${file.name}`;
  
      await fs.writeFile(filePath, buffer);
  
      return {status : 200, message : 'Success', filePath};
  
    } catch (err) {
      throw new Error(err);
    }
  }

export async function getAllUser (type = 1) {
    try{

        const session = await auth();
        if(!session) {
            return {status : 401, message : 'Unauthrized'};
        }

        let users = null;
        if(type == 1) {
             users = await userModel.find({type}).lean();
        }else if(type == 2) {
             users = await userModel.find({ uploads: { $exists: true, $ne: [] } }).lean();
        }else if(type == 3) {
             users = await userModel.find({ downloads: { $exists: true, $ne: [] } }).lean();
        }

        if(!users) {
            return {status : 404, message : "Users not found",  users};
        }

        users = replaceMongoIdInArray(users);

        return {status : 200, message : "User found",  users};

    } catch(error) {
        throw new Error(error);
    }
}

export async function statusToggle (data) {
    try{

        const session = await auth();
        if(!session) {
            return {status : 401, message : 'Unauthrized'};
        }

        const users = await userModel.findOne({"_id" : data.id});

        let nextStatus = data.status == '1' ? 2 : 1;
        users.status = nextStatus;
        
        await users.save();

        revalidatePath('/dashboard/users');
        return {status : 200, message : "User found",  users};

    } catch(error) {
        throw new Error(error);
    }
}

