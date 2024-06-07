import { subtitleModel } from "@/models/subtitle-model";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { auth } from "../../../../auth";

export const POST = async (request) => {
  const session = await auth();
  if (!session) {
    return new NextResponse("Unauthorize..", {
      status: 401,
    });
  }
  try {
    const data = await request.json();
    await dbConnect();

    const author = {
      name: session?.user?.name,
      email: session?.user?.email,
    };

    const subtitle = await subtitleModel.create({ ...data, author });
    const user = await userModel.findOne({"email" : session?.user.email});

    user.uploads = subtitle._id;

    await user.save();

    revalidatePath('/dashboard/my-subtitle');
    
    return new NextResponse("Subtitle has been created", {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
