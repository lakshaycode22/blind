import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    domain: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    posts: [
      {
        post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post"
        }
      }
    ]
  },
  { timestamps: true }
);

export const College = mongoose.model("College", collegeSchema);
