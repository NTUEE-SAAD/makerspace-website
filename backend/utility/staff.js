import Staff from "../models/staff.js";
import bcrypt from "bcryptjs";
import Item from "../models/item.js";
import { GoogleAuth } from "./googleauth.js";
import Instrument from "../models/instrument.js";
let sheetdata = [];
const findAll = async (res) => {
  try {
    const datas = await Staff.find({}, { name: 1, time: 1 });
    console.log(datas);
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

const handleLeave = async (body, res) => {
  const newDayOff = {
    date: new Date(body.date),
    reason: body.reason,
    time: body.time,
    day: body.day,
  };
  const staff = await Staff.findOneAndUpdate(
    { name: body.name },
    { dayoff: newDayOff }
  );
  if (staff) res.status(200).send({ data: "successfully leave" });
  else res.status(406).send({ data: "failed" });
};

const handleNotify = async (Name, res) => {
  const staff = await Staff.findOne({ name: Name }, { time: 1 });
  if (staff === null) {
    res.status(406).send({ data: `no staff: ${Name}` });
    return;
  }
  //console.log(staff.time);
  const staffs = await Staff.find(
    { dayoff: { $exists: true } },
    { name: 1, dayoff: 1 }
  );
  let returnformat = [];
  staffs.forEach((data) => {
    const timeslot = { day: data.dayoff.day, time: data.dayoff.time };
    staff.time.forEach((t) => {
      if (t.time === timeslot.time && t.day === timeslot.day) {
        if (data.name !== Name)
          returnformat.push({
            name: data.name,
            date: data.dayoff.date,
            reason: data.dayoff.reason,
            time: data.dayoff.time,
            day: data.dayoff.day,
          });
      }
    });
  });
  res.status(200).send({
    data: returnformat,
  });
};

const handleToDo = async (Time, res) => {
  const instruments = Instrument.find({});
  let todolist = [];
  (await instruments).forEach((i) => {
    i.reservation.forEach((r) => {
      console.log(r.date - new Date());
      if (r.date - new Date() > 60 * 60 * 2 * 1000)
        todolist.push({
          name: r.name,
          time: r.date,
          instrument: i.name,
        });
    });
  });
  res.status(200).send({ data: todolist });
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

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const handleBorrow = async (body, res) => {
  try {
    var d = new Date();
    d = addDays(d, 14);
    const newBorrow = new Item({
      studentid: body.studentid,
      items: body.items,
      duedate: d,
    });
    console.log("create", newBorrow);
    await newBorrow.save();
    updateSheet(body.items, "-");
    res.status(200).send({
      data: { _id: newBorrow._id, duedate: newBorrow.duedate.toDateString() },
    });
  } catch (e) {
    console.log(e);
    res.status(403).send({
      data: "failed",
    });
  }
};

const handleReturn = async (body, res) => {
  console.log("returning", body);
  const deletion = await Item.findByIdAndDelete(body.id);
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

const itemQuery = async (search, type, location, res) => {
  try {
    const { sheet, request } = await GoogleAuth();
    const response = (await sheet.spreadsheets.values.get(request)).data;
    sheetdata = response.values;
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
    res.send({ data: Result });
  } catch (err) {
    console.error(err);
  }
};

const updateSheet = async (items, type) => {
  console.log("updating", sheetdata);
  items.forEach((item) => {
    sheetdata.forEach((sheet, i) => {
      if (sheet[0] === item.name) {
        if (type === "-") {
          console.log(`E${i}`);
        } else {
        }
      }
    });
  });
};

export {
  findAll,
  handleNotify,
  staffOnDuty,
  handleSignIn,
  handleSignUp,
  handleBorrow,
  handleReturn,
  handleGet,
  itemQuery,
  handleToDo,
  handleLeave,
};
