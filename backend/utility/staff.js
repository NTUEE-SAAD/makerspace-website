import Staff from "../models/staff";
import bcrypt from "bcryptjs";

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
const saltRounds = 10;
const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

const handleSignIn = async (Name, Password, res, token) => {
  if (token) {
    console.log("remember");
    res.status(200).send({
      data: "success",
    });
    return true;
  }
  const user = await Staff.findOne({ name: Name });
  if (user) {
    if (bcrypt.compareSync(Password, user.password)) {
      res.status(200).send({
        data: "success",
      });
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

export { findAll, notifyReserve, staffOnDuty, hashPassword, handleSignIn };