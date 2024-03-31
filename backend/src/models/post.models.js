import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    body: {
      type: String,
      required: true
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: "true"
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "true"
    }
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
