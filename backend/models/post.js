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
    required: [true, "description is required"],
  },
  image: {
    type: [String],
    required: [true, "image is required"],
  },
  uuid: {
    type: String,
    required: [true, "uuid is required"],
  },
});

const exportSchema = mongoose.model("post", PostSchema);

export default exportSchema;
