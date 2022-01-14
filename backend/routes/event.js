import express from "express";
import { findAll, handleCreate, deleteAll } from "../utility/event";
const router = express.Router();

router.get("/", (req, res) => {
  findAll(res);
});

router.post("/createEvent", (req, res) => {
  handleCreate(req.body, res);
});
//deleteAll();
export default router;
