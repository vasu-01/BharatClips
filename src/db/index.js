import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MonogoDB connected !! DB HOST: ${connectionInstance.connection.host}` //to verify the correct connection on mongodb
    );
  } catch (err) {
    console.log("MonogoDB connection error:", err);
    process.exit(1); //used to exit
  }
};

export default connectDB;
