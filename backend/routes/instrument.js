import express from "express";
import {
  getAll,
  getStatus,
  setBusyTime,
  reserve,
  reservationModify,
} from "../utility/insturment";
const router = express.Router();

router.get("/", (req, res) => {
  getAll().then((r) => {
    if (r != undefined) {
      res.status(200).send(r);
    }
  });
});

router.get("/status", (req, res) => {
  getStatus().then((r) => {
    if (r != undefined) {
      res.status(200).send(r);
    }
  });
});
router.post("/busy", (req, res) => {
  console.log(req.body);
  setBusyTime({ name: req.body.name, duration: req.body.duration }).then(
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
      res.status(500).send({ message: "reservation failed", data: {} });
    }
  });
});
router.put("/reservation", async (req, res) => {
  console.log(req.body);
  var ret = await reservationModify({ uuid: req.body.id, date: req.body.date });
  console.log(ret);
  if (ret === "success")
    res.status(200).send({ message: "reservation modify success" });
  else if (ret === "uuid not found")
    res.status(406).send({
      message: "uuid not found, the reservation has expired or wrong uuid",
    });
  else res.status(500).send({ message: "something wrong during modifing" });
});

export default router;
