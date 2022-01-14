import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ReservationSchema = Schema({
  name: {
    type: String,
    required: [true, "Name for reservation is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  id: {
    type: String,
    required: [true, "studentId is required"],
  },
  date: {
    type: Date,
    required: [true, "date is required"],
  },
  uuid: {
    type: String,
    required: [true, "uuid is required"],
  },
});
const InstrumentSchema = Schema({
  type: {
    type: String,
    enum: ["3DP", "LazerCut"],
    required: [true, "Type is required"],
  },
  name: {
    type: String,
    lowercase: true,
    required: [true, "Name is required"],
  },
  busyUntil: {
    type: Date,
    required: false,
  },
  busyBegin: {
    type: Date,
    required: false,
  },
  healthy: {
    type: Boolean,
    required: [true, "healthy is required"],
  },
  reservation: {
    type: [ReservationSchema],
    required: false,
  },
});

const exportSchema = mongoose.model("instrument", InstrumentSchema);
export default exportSchema;
