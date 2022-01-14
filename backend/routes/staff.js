import express from "express";
import Staff from "../models/staff";
import bcrypt from "bcryptjs";
const router = express.Router();

router.get("/", (req, res) => {
  findAll(res);
});

const findAll = async (res) => {
  try {
    const datas = await Staff.find();
    if (datas.length !== 0) {
      datas.sort();
      res.status(200).send({ message: "success", data: datas });
    } else {
      res.status(403).send({ message: "error", data: null });
    }
  } catch (e) {
    res.status(403).send({ message: "error", data: null });
  }
};

// TODO
router.post(`/notify`, (req, res) => {
  const Time = req.body["Time"];
  res.status(200).send({
    data: "success",
  });
});

router.post("/onduty", (req, res) => {
  const Name = req.body["Name"];
  staffOnDuty(Name, res);
});

const staffOnDuty = async (Name, res) => {
  const d = new Date();
  await Staff.findOneAndUpdate({ name: Name }, { $set: { onduty: d } });
  res.status(200).send({
    name: Name,
    time: time,
  });
};
const saltRounds = 10;
const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

router.post("/signin", (req, res) => {
  const Name = req.body["signInName"];
  const Password = req.body["signInPassword"];
  handleSignIn(Name, Password, res);
});

const handleSignIn = async (Name, Password, res) => {
  const user = await Staff.findOne({ name: Name });
  if (user) {
    if (bcrypt.compareSync(Password, user.password)) {
      res.status(200).send({
        data: "success",
      });
    }
  } else {
    res.status(403).send({
      data: "wrong password",
    });
  }
};

export default router;
