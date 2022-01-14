import express from "express";
import staffRoute from "./routes/staff";
import instrumentRoute from "./routes/instrument";
import mongoose from "mongoose";
import { dataFind, dataInit } from "./upload";
import { init, getStatus } from "./utility/insturment";
import bodyParser from "body-parser";
require("dotenv").config();
const session = require("express-session");
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || 4000;
const dboptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
app.use(bodyParser.json());

const sessionOptions = {
  cookie: {
    path: "/",
    httpOnly: true,
    //secure: true,
    maxAge: 1000 * 60 * 3,
  },
  resave: false,
  saveUninitialized: false,
  secret: "3%.#Bjj,/Qgt6'X?j'*>",
  unset: "destroy",
};
app.use(session(sessionOptions));
app.use("/staff", staffRoute);
app.use("/instrument", instrumentRoute);

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("mongo db connection created"));

// dataInit();

// (async () => {
//   await init();
// })();
