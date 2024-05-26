import { subtitleModel } from "@/models/subtitle-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  await dbConnect();

  try {
    await subtitleModel.create({...data});
    return new NextResponse("Subtitle has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });

  }
};