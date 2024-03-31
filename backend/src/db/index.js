import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionToMongo = await mongoose
      .connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      .then(() => console.log("connection successful"));
  } catch (error) {
    console.log(`Could not connect to DB. Error: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
