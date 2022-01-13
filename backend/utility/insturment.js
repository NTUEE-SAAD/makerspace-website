import instrument from "../models/instrument";
import { v4 } from "uuid";

//[must] initialize data
const InstrumentList = {
  "X1E-Plus": {
    type: "3DP",
    healthy: true,
  },
  HyperCube: {
    type: "3DP",
    healthy: true,
  },
  Formlab: {
    type: "3DP",
    healthy: true,
  },
  Anycubic: {
    type: "3DP",
    healthy: true,
  },
  ThunderLaser: {
    type: "LazerCut",
    healthy: true,
  },
  GreenLaser: {
    type: "LazerCut",
    healthy: true,
  },
};
const checkId = async (id) => {
  var data = await instrument.find();
  data.forEach((instrument) => {
    instrument.reservation.forEach((reservation) => {
      if (reservation.uuid | ("" === id)) {
        return false;
      }
    });
  });
  return true;
};
const init = async () => {
  await instrument.deleteMany({});
  for (const [key, value] of Object.entries(InstrumentList)) {
    const obj = new instrument({
      name: key,
      type: value.type,
      healthy: true,
      reservation: [],
    });
    await obj.save();
  }
};
const getStatus = async () => {
  const res = await instrument.find();
  const obj = {};
  const d = new Date();
  res.forEach((value) => {
    if (value.busyUntil !== undefined) {
      console.log(value.busyUntil.getTime(), d.getTime());
      if (d - value.busyUntil.getTime() >= 0) {
        instrument.findOne({ name: value.name }).then((t) => {
          const target = t;
          target.available = true;
          target.busyBegin = undefined;
          target.busyUntil = undefined;
          target.save();
        });
      }
    }
    obj[value.name] = {
      available: value.busyUntil !== undefined ? false : true,
      healthy: value.healthy,
      busyUntil: value.busyUntil !== undefined ? value.busyUntil : undefined,
      busyBegin: value.busyBegin !== undefined ? value.busyBegin : undefined,
      reservation: value.reservation.map((r) => {
        return {
          name: r.name,
          date: r.date,
        };
      }),
    };
  });
  return obj;
};
const getAll = async () => {
  const res = await instrument.find();
  return res;
};
const setBusyTime = async ({ name, duration }) => {
  if (
    isNaN(duration.days | 0) ||
    isNaN(duration.hours | 0) ||
    isNaN(duration.minutes | 0) ||
    (duration.days | 0) < 0 ||
    (duration.hours | 0) < 0 ||
    (duration.minutes | 0) < 0
  ) {
    console.log(isNaN(duration.days), (duration.days | 0) < 0);
    return "input error";
  }

  const start = new Date();
  console.log(duration);
  const d =
    (duration.days | 0) * 24 * 60 +
    (duration.hours | 0) * 60 +
    (duration.minutes | 0);
  const target = await instrument.findOne({ name: name });
  const until = new Date(start.getTime() + d * 10 * 1000);

  target.busyBegin = start;
  target.busyUntil = until;
  await target.save();
  return "success";
};
const reserve = async ({ user, targetInstrument, date }) => {
  const target = await instrument.findOne({ name: targetInstrument });
  var reservationId;
  do {
    reservationId = v4().slice(0, 6);
  } while (!checkId(reservationId));
  console.log(reservationId);
  console.log(target);
  console.log(date);
  target.reservation.push({
    name: user.name,
    id: user.id,
    email: user.email,
    uuid: reservationId,
    date: new Date(date),
  });
  await target.save();
  return {
    message: "success",
    data: {
      name: user.name,
      id: user.id,
      uuid: reservationId,
      date: new Date(date),
    },
  };
};
export { init, getStatus, getAll, setBusyTime, reserve };
