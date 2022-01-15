import express from "express";
import {
  findAll,
  notifyReserve,
  staffOnDuty,
  handleSignIn,
  handleSignUp,
  itemQuery,
  itemBorrow,
  itemReturn,
} from "../utility/staff";
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
  //
  // const { search, type, location } = req.query;
  // console.log(
  //   `search index : ${search} / type : ${type} / location : ${location} `
  // );
  // let searchResult = [],
  //   typeResult = [],
  //   Result = [];
  // const sheetdata = [
  //   ["STM32", "board", "A", "10"],
  //   ["MPU6050", "module", "B", "15"],
  //   ["MG-90", "motor", "C", "20"],
  // ];
  // if (search) {
  //   sheetdata.forEach((value, i) => {
  //     if (value[0].includes(search)) {
  //       searchResult.push(value);
  //     }
  //   });
  //   if (!searchResult) {
  //   }
  // } else {
  //   searchResult = sheetdata;
  // }
  // if (type && type != "all") {
  //   searchResult.forEach((value, i) => {
  //     if (value[1].includes(type)) {
  //       typeResult.push(value);
  //     }
  //   });
  //   if (!typeResult) {
  //   }
  // } else {
  //   typeResult = searchResult;
  // }
  // if (location && location != "all") {
  //   typeResult.forEach((value, i) => {
  //     if (value[2].includes(location)) {
  //       Result.push({
  //         key: `E${i}`,
  //         name: value[0],
  //         type: value[1],
  //         location: value[2],
  //         quantity: value[3],
  //       });
  //     }
  //   });
  //   if (!Result) {
  //   }
  // } else {
  //   typeResult.forEach((value, i) => {
  //     Result.push({
  //       key: `E${i}`,
  //       name: value[0],
  //       type: value[1],
  //       location: value[2],
  //       quantity: value[3],
  //     });
  //   });
  // }
  // console.log({ data: Result });
  // res.send({ data: Result });
});

export default router;
