import express from "express";
import Staff from "../models/staff";
import bcrypt from "bcryptjs";
const router = express.Router();

router.get("/", (req, res) => {
  findAll(res);
});

const findAll = async (res) => {
  try {
    const datas = await Staff.find();
    if (datas.length !== 0) {
      datas.sort();
      res.status(200).send({ message: "success", data: datas });
    } else {
      res.status(403).send({ message: "error", data: null });
    }
  } catch (e) {
    res.status(403).send({ message: "error", data: null });
  }
};

// router.get("/postDetail", (req, res) => {
//   const pid = req.query["pid"];
//   findOnePost(pid, res);
// });

// const findOnePost = async (pid, res) => {
//   try {
//     const postToSend = await Post.find({ postId: pid });
//     if (postToSend.length !== 0) {
//       res.status(200).send({ message: "success", post: postToSend[0] });
//     } else {
//       res.status(403).send({ message: "error", post: null });
//     }
//   } catch (e) {
//     res.status(403).send({ message: "error", post: null });
//   }
// };

// TODO
router.post(`/?notify=${Date()}`, (req, res) => {});

router.post("/onduty", (req, res) => {
  const Name = req.body["Name"];
  const time = staffOnDuty(Name);
  res.status(200).send({
    name: Name,
    time: time,
  });
});

const staffOnDuty = async (Name) => {
  const d = new Date();
  await Staff.findOneAndUpdate({ name: Name }, { $set: { onduty: d } });
  return d;
};
const saltRounds = 10;
const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

router.post("/signin", (req, res) => {
  const Name = req.body["signInName"];
  const Password = req.body["signInPassword"];
  handleSignIn(Name, Password, res);
});

const handleSignIn = async (Name, Password, res) => {
  const user = await Staff.findOne({ name: Name });
  if (user) {
    if (user.password === hashPassword(Password)) {
      res.status(200).send({
        data: "success",
      });
    }
  } else {
    res.status(403).send({
      data: "wrong password",
    });
  }
};

// const savePost = async (postId, title, content, timestamp, res) => {
//   try {
//     const newPost = new Staff({ postId, title, content, timestamp });
//     console.log("create ", newPost);
//     res.status(200).send({
//       message: "success",
//     });
//     return newPost.save();
//   } catch (e) {
//     res.status(403).send({
//       message: "error",
//     });
//   }
// };

// router.delete("/post", (req, res) => {
//   const pid = req.query["pid"];
//   deletePost(pid, res);
// });

// const deletePost = async (pid, res) => {
//   try {
//     const deletion = await Post.findOneAndDelete({ postId: pid });
//     console.log("delete ", deletion);
//     if (deletion) {
//       res.status(200).send({
//         message: "success",
//       });
//     } else {
//       res.status(403).send({
//         message: "error",
//         post: null,
//       });
//     }
//   } catch (e) {
//     res.status(403).send({
//       message: "error",
//       post: null,
//     });
//   }
// };

export default router;
