// require("dotenv").config({path:"./env"})
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDb();

/*
import express from "express";
const app = express();
import(async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    app.on("error", (error) => {
      console.log("unable to talk to database by backend");
      throw error
    });
    app.listen(process.env.PORT,()=>{
      console.log(`App i s listening on port ${process.env.PORT}`);
    
    })
  } catch (error) {
    console.error("error unable to connect to db", error);
  }
})();

*/
