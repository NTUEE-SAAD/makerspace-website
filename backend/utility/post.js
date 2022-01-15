import posts from "../models/post.js";
import { v4 } from "uuid";
const getPost = async (data) => {
  console.log(data);
  if (data !== {}) {
    const query = {};
    if (data.title) query["title"] = data.title;
    if (data.description) query["description"] = { $all: data.description };
    if (data.id) query["uuid"] = data.id;
    const res = await posts.find(query);
    console.log(res);
    return res;
  }
};

const checkId = async (id) => {
  var data = await posts.find();
  const ret = data.filter((post) => {
    if (post.uuid === id) return true;
    else return false;
  });
  if (ret.length === 1) return false;
  else return true;
};

const testDataInit = async () => {
  console.log("Initing");

  try {
    await posts.deleteMany({});
    await createPost({
      title: "marco",
      content: "Hi I'm marco",
      description: ["m", "aaa", "bbb", "ccc"],
    });
    await createPost({
      title: "ben",
      content: "Hi I'm ben",
      description: ["wwfuh"],
    });
  } catch (e) {
    return "initialize failed", e;
  }
  return "success";
};

const createPost = async (data) => {
  var postId;
  do {
    postId = v4().slice(0, 6).toLowerCase();
  } while (!(await checkId(postId)));
  try {
    const newPost = new posts({
      title: data.title,
      content: data.content,
      description: data.description || [],
      image: data.image || [],
      uuid: postId,
    });
    await newPost.save();
  } catch (e) {
    return { message: "failed", error: e };
  }

  return { message: "success", id: postId };
};

const modify = async ({ id, data }) => {
  const post = await posts.findOne({ uuid: id });
  if (post === undefined) return "uuid not found";
  post.title = data.title || post.title;
  (post.content = data.content || post.content),
    (post.description = data.content || post.description),
    (post.image = data.image || post.image);
  await post.save();
  return "success";
};
const deletePost = async ({ id }) => {
  const post = await posts.findOneAndDelete({ uuid: id });
  console.log(post);
  if (!post) return "id not found";
  else return "success";
};
export { getPost, createPost, testDataInit, modify, deletePost };
