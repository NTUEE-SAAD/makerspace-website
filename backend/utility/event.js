import Event from "../models/event";
import { v4 } from "uuid";
const findAll = async (res) => {
  try {
    const datas = await Event.find();
    if (datas.length !== 0) {
      res.status(200).send({ data: datas });
    } else {
      res.status(403).send({ data: null });
    }
  } catch (e) {
    res.status(403).send({ data: null });
  }
};

const handleCreate = (body, res) => {
  const newEvent = new Event({
    id: v4(),
    color: body.color,
    from: new Date(body.from),
    to: new Date(body.to),
    title: body.title,
  });
  res.status(200).send({ data: newEvent });
  return newEvent.save();
};

const deleteAll = async () => {
  await Event.deleteMany({});
};

export { findAll, handleCreate, deleteAll };
