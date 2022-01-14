import Staff from "../models/staff";
import bcrypt from "bcryptjs";

const findAll = async (res) => {
  try {
    const datas = await Staff.find({}, { name: 1, time: 1 });
    if (datas.length !== 0) {
      datas.sort();
      res.status(200).send({ data: datas });
    } else {
      res.status(406).send({ data: null });
    }
  } catch (e) {
    res.status(500).send({ data: null });
  }
};

const notifyReserve = async (Time, res) => {
  console.log(Time); // TODO
  res.status(200).send({
    data: "success",
  });
};

const staffOnDuty = async (Name, date, res) => {
  const d = new Date(date);
  await Staff.findOneAndUpdate({ name: Name }, { $set: { onduty: d } });
  res.status(200).send({
    data: "success",
  });
};

const handleSignIn = async (Name, Password, res, token) => {
  if (token) {
    console.log("remember");

    return true;
  }
  const user = await Staff.findOne({ name: Name });
  if (user) {
    if (bcrypt.compareSync(Password, user.password)) {
      return true;
    } else {
      res.status(403).send({
        data: "wrong password",
      });
      return false;
    }
  } else {
    res.status(403).send({
      data: "not registered",
    });
    return false;
  }
};

const handleSignUp = async (Name, Password, Time, res) => {
  const user = await Staff.findOne({ name: Name });
  if (!user) {
    const newUser = new Staff({
      name: Name,
      password: bcrypt.hashSync(Password),
      time: Time,
    });
    console.log("create ", newUser);
    res.status(200).send({
      data: "success",
    });
    return newUser.save();
  } else {
    res.status(403).send({
      data: "user exist",
    });
  }
};

export { findAll, notifyReserve, staffOnDuty, handleSignIn, handleSignUp };
