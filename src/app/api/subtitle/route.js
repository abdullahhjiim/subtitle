import { subtitleModel } from "@/models/subtitle-model";
import { dbConnect } from "@/service/mongo";
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

    await subtitleModel.create({ ...data, author });
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
