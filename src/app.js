import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors())  //basic way to configure
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //to accept json data with limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //to symbols like %,# etc in url and extended means nested objects
app.use(express.static("pubilc"));
app.use(cookieParser()); //used to access and set user cookies by server

export { app };
