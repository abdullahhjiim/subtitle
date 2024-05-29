import { configurationModel } from "@/models/configuration-model";
import { subtitleModel } from "@/models/subtitle-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getSubtitle(type) {
    await dbConnect();
    let subtitles = [];
    if(type == 'top-subttile') {
        subtitles = await subtitleModel.find({}).sort({"ratings" : 1}).limit(5).lean();
    }

    subtitles  = replaceMongoIdInArray(subtitles);
    return {status : 200, subtitles}
}

export async function getConfigurationByType(type) {
    await dbConnect();
    let configuration = await configurationModel.findOne({"type" : type}).lean();

    // configuration  = replaceMongoIdInObject(configuration);
    return {status : 200, configuration}
}