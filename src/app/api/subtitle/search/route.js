import { IMDB_URL } from "@/helpers/config";
import { imdbModel } from "@/models/imdb-model";
import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";

export async function GET(request) {
  try {
    const session = await auth();

    if (!session) {
      return new NextResponse("Unauthorize user", { status: 401 });
    }

    const {searchParams} = new URL(request.url);
    let title =  searchParams.get("title");
    let year  =  searchParams.get("year");

    let url = `&t=${title}`;
    const newData = {title};
    if(year != 'undefined') {
        url = `${url}&y=${year}`;
        newData.year = year;
    }

    const myImdbFound = await imdbModel.findOne({"title" : title});
    if(myImdbFound) {
        return new NextResponse(JSON.stringify(myImdbFound));
    }

    let finalUrl = `${IMDB_URL}${url}`;

    const imdb = await fetch(finalUrl, {method: "GET"});

    console.log("imdbdddo : ", imdb, finalUrl);
    
    if(imdb) {

        newData.content = JSON.stringify(imdb);

        console.log("new data", newData);
        await imdbModel.create(newData)

        return new NextResponse(JSON.stringify(imdb), {status: 200});
    }

    return new NextResponse("No record Found", {status: 404});

  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 400 });
  }
}
