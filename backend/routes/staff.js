import express from "express";
import {
  findAll,
  notifyReserve,
  staffOnDuty,
  hashPassword,
  handleSignIn,
} from "../utility/staff";
const router = express.Router();
router.get("/", (req, res) => {
  findAll(res);
});

// TODO
router.post(`/notify`, (req, res) => {
  const Time = req.body.time;
  notifyReserve(Time, res).catch((e) => {
    console.log(e);
    res.status(403).send({
      data: "fail",
    });
  });
});
router.post("/onduty", (req, res) => {
  const Name = req.body.name;
  const date = req.body.date;
  staffOnDuty(Name, date, res).catch((e) => {
    console.log(e);
    res.status(403).send({
      data: "fail",
    });
  });
});

router.post("/signin", (req, res) => {
  const Name = req.body.name;
  const Password = req.body.password;
  const token = req.session.user;
  handleSignIn(Name, Password, res, token)
    .then((success) => {
      if (success) {
        req.session.user = Name;
        res.status(200).send({
          data: "success",
        });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(403).send({
        data: "fail",
      });
    });
});
router.post("/signout", (req, res) => {
  req.session.destroy(() => {
    console.log("session destroyed");
  });
});
//router.post("signup")

export default router;
