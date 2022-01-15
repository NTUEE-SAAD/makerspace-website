import express from "express";
import {
  findAll,
  handleCreate,
  deleteAll,
  handleModify,
} from "../utility/event.js";
const router = express.Router();

router.get("/", (req, res) => {
  findAll(res);
});

router.post("/create", (req, res) => {
  handleCreate(req.body, res);
});

router.post("/modify", (req, res) => {
  handleModify(req.body, res);
});

//deleteAll();
export default router;
