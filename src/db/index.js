import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n Mongo db Connected !! Db host:
      ${connectionInstance.connection.host}
      `);
  } catch (error) {
    console.log("error unable to connect to db", error);
    process.exit(1);
  }
};

export default connectDb;
