import Staff from "../models/staff";
import bcrypt from "bcryptjs";
import { GoogleAuth } from "./googleauth";

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

const itemQuery = async (search, type, location, res) => {
  try {
    const { sheet, request } = await GoogleAuth();
    console.log(sheet);
    const response = (await sheet.spreadsheets.values.get(request)).data;
    const sheetdata = response.values;
    let searchResult = [],
      typeResult = [],
      Result = [];
    if (search) {
      sheetdata.forEach((value, i) => {
        if (value[0].toLowerCase().includes(search.toLowerCase())) {
          searchResult.push(value);
        }
      });
      if (!searchResult) {
      }
    } else {
      searchResult = sheetdata;
    }
    if (type && type != "all") {
      searchResult.forEach((value, i) => {
        if (value[1].includes(type)) {
          typeResult.push(value);
        }
      });
      if (!typeResult) {
      }
    } else {
      typeResult = searchResult;
    }
    if (location && location != "all") {
      typeResult.forEach((value, i) => {
        if (value[2].includes(location)) {
          Result.push({
            key: `E${i}`,
            name: value[0],
            type: value[1],
            location: value[2],
            quantity: value[3],
          });
        }
      });
      if (!Result) {
      }
    } else {
      typeResult.forEach((value, i) => {
        Result.push({
          key: `E${i}`,
          name: value[0],
          type: value[1],
          location: value[2],
          quantity: value[3],
        });
      });
    }
    console.log({ data: Result });
    res.send({ data: Result });
  } catch (err) {
    console.error(err);
  }
};

const itemBorrow = async () => {};

const itemReturn = async () => {};
export {
  findAll,
  notifyReserve,
  staffOnDuty,
  handleSignIn,
  handleSignUp,
  itemQuery,
  itemBorrow,
  itemReturn,
};
