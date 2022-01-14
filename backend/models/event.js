import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = Schema(
  {
    id: {
      type: String,
      required: [true, "Id field is required."],
      unique: true,
    },
    color: {
      type: String,
      required: [true, "Color field is required."],
    },
    from: {
      type: Date,
      required: [true, "From field is required."],
    },
    to: {
      type: Date,
      required: [true, "To field is required."],
    },
    title: {
      type: String,
      required: [true, "Title field is required."],
    },
  },

  {
    collection: "event",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const exportSchema = mongoose.model("event", EventSchema);
export default exportSchema;
