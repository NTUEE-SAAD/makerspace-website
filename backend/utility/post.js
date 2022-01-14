import posts from "../models/post";

const getAll = async () => {
  posts.find().then((r) => {
    return r;
  });
};
const testDataInit = async () => {
  await createPost({
    title: "marco",
    content: "Hi I'm marco",
    description: ["m", "aaa", "bbb", "ccc"],
  });
  await createPost({ title: "john", content: "Hi I'm john" });
  await createPost({ title: "ric", content: "Hi I'm ric" });
  await createPost({ title: "kevin", content: "Hi I'm kevin" });
  await createPost({
    title: "ben",
    content: "Hi I'm ben",
    description: ["wwfuh"],
  });
};
const createPost = async ({ title, content, description, image }) => {
  const newPost = new posts({
    title: title,
    content: content,
    description: description,
    image: image,
  });
  await newPost.save();
  return "success";
};

export { getAll, createPost, testDataInit };
