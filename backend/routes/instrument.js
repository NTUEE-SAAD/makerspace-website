import express from "express";
import instrument from "../models/instrument";
import { getAll, getStatus, setBusyTime } from "../utility/insturment";
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
router.post("/busy", (req, res) => {
  console.log(req.body);
  setBusyTime({ name: req.body.name, duration: req.body.duration }).then(
    (r) => {
      if (r === "success") {
        res.status(500).send({ message: "timesetting success" });
      } else {
        res.status(400).send({ message: "something wrong during timesetting" });
      }
    }
  );
});

export default router;
