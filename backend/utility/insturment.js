import instrument from "../models/instrument";
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

const init = async () => {
  await instrument.deleteMany({});
  for (const [key, value] of Object.entries(InstrumentList)) {
    const obj = new instrument({
      name: key,
      type: value.type,
      healthy: true,
    });
    await obj.save();
  }
};
const getStatus = async () => {
  const res = await instrument.find();
  const obj = {};
  res.forEach((value) => {
    obj[value.name] = {
      available: value.busyUntil != undefined ? false : true,
      healthy: value.healthy,
      busyUntil: value.busyUntil != undefined ? value.busyUntil : undefined,
      busyBegin: value.busyBegin != undefined ? value.busyBegin : undefined,
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
    isNaN(duration.days) ||
    isNaN(duration.hours) ||
    isNaN(duration.minutes) ||
    duration.days < 0 ||
    duration.hours < 0 ||
    duration.minutes < 0
  )
    return "input error";
  const start = new Date();
  console.log(duration);
  const d =
    (duration.days | 0) * 24 * 60 +
    (duration.hours | 0) * 60 +
    (duration.minutes | 0);
  const target = await instrument.findOne({ name: name });
  const until = new Date();

  until.setTime(start.getTime() + d * 60 * 1000);
  target.busyBegin = start;
  target.busyUntil = until;
  await target.save();
  return "success";
};
export { init, getStatus, getAll, setBusyTime };
