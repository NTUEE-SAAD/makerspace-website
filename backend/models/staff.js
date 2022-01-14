import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    time: [
      {
        day: {
          type: String,
          enum: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          required: false,
        },
        time: {
          type: String,
          enum: ["A", "B", "C", "D"],
          required: false,
        },
      },
    ],
    onduty: {
      type: Date,
      required: false,
    },
  },

  {
    collection: "staff",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const exportSchema = mongoose.model("staff", StaffSchema);

export default exportSchema;
