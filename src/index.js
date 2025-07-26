// require("dotenv").config(); or require('dotenv').config({path:'./env'});
import dotenv from "dotenv"; //this is new way and we can use this by some modification in dev in package.json

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connecetion failed !!!", err);
  });

//First Approach
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("Err:", err); //  to throw  error in case   db connected but express is not interacting due to any reason
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     throw error;
//   }
// })(); //this is the efie concept and semicolon at starting used  for cleaning purpose so that if coder forget semicolon in previous line so it will take
