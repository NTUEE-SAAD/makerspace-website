import express from "express";
import {
  findAll,
  notifyReserve,
  staffOnDuty,
  handleSignIn,
  handleSignUp,
  handleBorrow,
  handleReturn,
  handleGet,
  itemQuery,
} from "../utility/staff.js";
const router = express.Router();
const { google } = require("googleapis");
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

router.get("/signin", (req, res) => {
  const token = req.session.user;
  if (token) {
    res.status(200).send({ data: "success" });
  } else {
    res.status(200).send({ data: "no" });
  }
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
router.delete("/signout", (req, res) => {
  try {
    req.session.destroy(() => {
      console.log("session destroyed");
    });
    res.status(200).send({
      data: "successfully signout",
    });
  } catch {
    res.status(403).send({
      data: "signout failed",
    });
  }
});
router.post("/signup", (req, res) => {
  const Name = req.body.name;
  const Password = req.body.password;
  const Time = req.body.time;
  handleSignUp(Name, Password, Time, res).catch((e) => {
    console.log(e);
    res.status(403).send({
      data: "fail",
    });
  });
});
router.get("/search", (req, res) => {
  const { search, type, location } = req.query;
  itemQuery(search, type, location, res);
});

router.post("/borrow", (req, res) => {
  handleBorrow(req.body, res).catch((e) => {
    res.status(500).send({ data: "can't borrow" });
  });
});
router.delete("/return", (req, res) => {
  handleReturn(req.body, res).catch((e) => {
    res.status(500).send({ data: "can't return" });
  });
});

router.get("/borrow", (req, res) => {
  handleGet(req.query.studentid, res);
});

export default router;
