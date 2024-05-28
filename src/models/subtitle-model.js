import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bio: String,
  image: String,
});

const subtitleSchema = new Schema({
    title: {
      required: true,
      type: String
    },
    thumbnail: {
      required: true,
      type: String
    },
    year: {
      required: true,
      type: String
    },
    genre: {
      required: true,
      type: String
    },
    language: {
      required: true,
      type: String,
      default: 'English'
    },
    author : {
      type : AuthorSchema,
      required : true
    },
    filePath: {
      required: true,
      type: String
    },
    releaseName: {
      required: true,
      type: String
    },
    releaseInfo: {
      required: true,
      type: String
    },
    runtime: {
      required: false,
      type: String
    },
    releaseType: {
      required: false,
      type: String
    },
    productionType: {
      required: false,
      type: String
    },
    framerate: {
      required: false,
      type: Number
    },
    
  });

export const subtitleModel = mongoose.model("subtitles", subtitleSchema);