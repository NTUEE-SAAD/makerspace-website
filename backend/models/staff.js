import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Dayoff = Schema({
  date: {
    type: Date,
    required: [true, "dayoff date is required."],
  },
  reason: {
    type: String,
  },
  time: {
    type: String,
    enum: ["A", "B", "C", "D"],
  },
  day: {
    type: String,
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
});

const Time = Schema({
  day: {
    type: String,
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  },
  time: {
    type: String,
    enum: ["A", "B", "C", "D"],
  },
});

const StaffSchema = Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Name field is required."],
    },
    password: {
      type: String,
      required: [true, "Password field is required."],
    },
    time: [Time],
    onduty: {
      type: Date,
      required: false,
    },
    dayoff: Dayoff,
  },

  {
    collection: "staff",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const exportSchema = mongoose.model("staff", StaffSchema);

export default exportSchema;
