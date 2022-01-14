import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  content: {
    type: String,
    required: [true, "content is required"],
  },
  description: {
    type: [String],
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const exportSchema = mongoose.model("post", PostSchema);

export default exportSchema;
