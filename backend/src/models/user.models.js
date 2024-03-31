import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College"
    },
    collegeEmail: {
      type: String,
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
    ],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
