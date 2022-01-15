import express from "express";
import {
  getPost,
  createPost,
  testDataInit,
  modify,
  deletePost,
} from "../utility/post.js";
const router = express.Router();
router.get("/", (req, res) => {
  console.log(req.body);
  getPost(req.body).then((r) => {
    if (r !== undefined) {
      res.status(200).send(r);
    }
  });
});
router.post("/init", async (_, res) => {
  const ret = await testDataInit();
  console.log(ret);
  if (ret === "success")
    res.status(200).send({ message: "initialize successful" });
  else res.status(500).send({ message: "initialize failed" });
});
router.post("/createPost", async (req, res) => {
  console.log(req.body.data);
  const r = await createPost(req.body.data);
  console.log(r);
  if (r.message === "success") {
    res.status(200).send({ message: "post created", id: r.id });
    return;
  } else if (r.message === "failed") {
    res.status(406).send({ message: r.error });
  } else {
    res.status(500).send({ message: "error happenes when creating post" });
  }
});
router.put("/", async (req, res) => {
  console.log(req.body);
  const ret = await modify(req.body);
  if (ret === "success")
    res.status(200).send({ message: "post modification success" });
  else if (ret === "uuid not found")
    res.status(406).send({ message: "id not found" });
});
router.delete("/", async (req, res) => {
  console.log(req.body);
  const ret = await deletePost(req.body);
  if (ret === "id not found") res.status(406).send({ message: "id not found" });
  else res.status(200).send({ message: "post delete success" });
});

export default router;
