import express from "express";
import {
  getAll,
  getStatus,
  setBusyTime,
  reserve,
  reservationModify,
  reservationDelete,
  healthy,
} from "../utility/instrument.js";
const router = express.Router();

router.get("/status", (req, res) => {
  getStatus().then((r) => {
    if (r != undefined) {
      res.status(200).send(r);
    }
  });
});
router.post("/busy", (req, res) => {
  console.log(req.body);
  setBusyTime({ name: req.body.instrument, duration: req.body.duration }).then(
    (r) => {
      if (r === "success") {
        res.status(200).send({ message: "timesetting success" });
      } else if (r === "input error") {
        res.status(406).send({ message: "input error" });
      } else {
        res.status(500).send({ message: "something wrong during timesetting" });
      }
    }
  );
});
router.post("/reservation", (req, res) => {
  reserve({
    user: req.body.user,
    targetInstrument: req.body.instrument,
    date: req.body.date,
  }).then((r) => {
    if (r.message === "success") {
      res.status(200).send({ message: "reservation success", data: r.data });
    } else {
      res.status(500).send({ message: r });
    }
  });
});
//modify the reservation
router.put("/reservation", async (req, res) => {
  console.log(req.body);
  if (req.body.id === undefined) {
    res.status(406).send({ message: "input error" });
  } else {
    var ret = await reservationModify({
      uuid: req.body.id.trim(),
      date: req.body.date,
    });
    console.log(ret);
    if (ret === "success")
      res.status(200).send({ message: "reservation modify success" });
    else if (ret === "uuid not found")
      res.status(406).send({
        message: "uuid not found, the reservation has expired or wrong uuid",
      });
    else if (ret === "input invalid") {
      res.status(406).send({ message: "input error" });
    } else res.status(500).send({ message: ret });
  }
});
router.delete("/reservation", async (req, res) => {
  console.log(req.body);
  if (req.body.id === undefined) {
    res.status(406).send({ message: "input error" });
  } else {
    const ret = await reservationDelete({ uuid: req.body.id.trim() });
    console.log(ret);
    if (ret === "uuid not found")
      res.status(406).send({ message: "uuid not found" });
    else if (ret === "success")
      res.status(200).send({ message: "reservation delete success" });
    else if (ret === "input invalid")
      res.status(406).send({ message: "input error" });
    else res.status(500).send({ message: ret });
  }
});
router.put("/healthy", async (req, res) => {
  console.log(req.body);
  const ret = await healthy({
    ins: req.body.instrument,
    state: req.body.state,
  });
  if (ret === "success")
    res.status(200).send({ message: "healthy modify success" });
  else res.status(500).send({ message: "error happenes when setting health" });
});

export default router;
