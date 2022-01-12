import express from "express";
import instrument from "../models/instrument";
import { getAll, getStatus } from "../utility/insturment";
const router = express.Router();

router.get("/", (req, res) => {
  getAll().then((r) => {
    if (r != undefined) {
      res.status(500).send(r);
    }
  });
});

router.get("/status", (req, res) => {
  getStatus().then((r) => {
    if (r != undefined) {
      res.status(500).send(r);
    }
  });
});

export default router;
