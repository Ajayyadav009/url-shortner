import express from "express";

import { nanoid } from "nanoid";
import connectDB from "./src/config/mongo.config.js";
import dotenv from "dotenv";
import short_url from "./src/routes/shortUrl.routes.js";
import { redirectFromShortUrl } from "./src/controller/shorturl.controller.js";
dotenv.config("./.env");

import router from "./src/routes/shortUrl.routes.js";
const app = express();


// GET - Redirction
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/create", short_url);



app.get("/:id", redirectFromShortUrl);

app.listen(3000, function () {
  connectDB();
  console.log("Server is running on port 5000");
});
