import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = Schema({
  studentid: {
    type: String,
    required: [true, "Name field is required."],
  },
  items: [
    {
      name: {
        type: String,
        required: [true, "Name field is required."],
      },
      quantity: {
        type: Number,
        required: [true, "Quantity field is required."],
      },
    },
  ],
  duedate: {
    type: Date,
    required: [true, "Duedate field is required."],
  },
});
const exportSchema = mongoose.model("item", ItemSchema);
export default exportSchema;
