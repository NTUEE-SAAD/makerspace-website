import Staff from "../models/staff";
import bcrypt from "bcryptjs";
import Item from "../models/item";
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

const handleBorrow = async (body, res) => {
  try {
    const newBorrow = new Item({
      studentid: body.studentid,
      items: body.items,
      duedate: new Date(),
    });
    console.log("create", newBorrow);
    await newBorrow.save();
    res.status(200).send({
      data: { _id: newBorrow._id, duedate: newBorrow.duedate },
    });
  } catch (e) {
    console.log(e);
    res.status(403).send({
      data: "failed",
    });
  }
};

const handleReturn = async (body, res) => {
  const deletion = await Item.findByIdAndDelete(body._id);
  if (deletion) {
    res.status(200).send({ data: "successfully delete" });
  } else {
    res.status(406).send({ data: "borrow not found" });
  }
};

const handleGet = async (id, res) => {
  const borrows = await Item.find({ studentid: id });
  if (borrows.length === 0) {
    res.status(406).send({
      data: "no borrows",
    });
  } else
    res.status(200).send({
      data: borrows,
    });
};

export {
  findAll,
  notifyReserve,
  staffOnDuty,
  handleSignIn,
  handleSignUp,
  handleBorrow,
  handleReturn,
  handleGet,
};
