import Event from "../models/event.js";
import uuid from "uuid";
const { v4: uuidv4 } = uuid;
const findAll = async (res) => {
  try {
    const datas = await Event.find();
    if (datas.length !== 0) {
      res.status(200).send({ data: datas });
    } else {
      res.status(406).send({ data: null });
    }
  } catch (e) {
    res.status(500).send({ data: null });
  }
};

const handleCreate = (body, res) => {
  const newEvent = new Event({
    id: uuidv4(),
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

const handleModify = async (body, res) => {
  try {
    const event = await Event.findOne({ id: body.id });
    if (event) {
      event.color = body.color || event.color;
      event.from = body.from || event.from;
      event.to = body.to || event.to;
      event.title = body.title || event.title;
      await event.save();
      res.status(200).send({ data: event });
    } else {
      res.status(406).send({ data: "id not found" });
    }
  } catch (error) {
    res.status(500).send({ data: "failed to modify" });
  }
};

export { findAll, handleCreate, deleteAll, handleModify };
