// require("dotenv").config({path:"./env"})
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("unable to talk to database by backend");
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("backend is running in port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("mongo db connection failed !!", error);
  });

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
