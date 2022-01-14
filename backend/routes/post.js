import e from "express";
import express from "express";
import { getAll, createPost, testDataInit } from "../utility/post";
const router = express.Router();
router.get("/", (req, res) => {
  getAll().then((r) => {
    if (r !== undefined) {
      res.state(200).send(r);
    }
  });
});
router.post("/init", async (_, res) => {
  const ret = await testDataInit();
  if (ret === "success")
    res.status(200).send({ message: "initialize successful" });
  else res.status(500).send({ message: "initialize failed" });
});
router.post("/createPost", (req, res) => {
  console.log(req.body);
  createPost(req.body).then((r) => {
    if (r === "success") {
      res.status(200).send({ message: "post created", data: req.body });
      return;
    } else {
      res.status(500);
    }
  });
});

export default router;
