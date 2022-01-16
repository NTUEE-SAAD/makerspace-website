import path from "path";
import express from "express";
import staffRoute from "./routes/staff.js";
import instrumentRoute from "./routes/instrument.js";
import eventRoute from "./routes/event.js";
import mongoose from "mongoose";
import { dataFind, dataInit } from "./upload.js";
import { init } from "./utility/instrument.js";
import postRoute from "./routes/post.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import session from "express-session";
import { postsInit, eventInit } from "./init.js";

dotenv.config();
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
app.use("/api/post", postRoute);
app.use("/api/staff", staffRoute);
app.use("/api/instrument", instrumentRoute);
app.use("/api/event", eventRoute);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("mongo db connection created"));

dataInit();

(async () => {
  await init();
  await postsInit();
  await eventInit();
})();
