import Staff from "./models/staff.js";
import bcrypt from "bcryptjs";

const saltRounds = 10;

const dataInit = async () => {
  const checkData = await Staff.find();
  var hashes = [];
  const passwords = ["123123123", "234234234", "345345345", "456456456"]; // this is for testing only
  //console.log(bcrypt.compareSync(passwords[0], bcrypt.hashSync(passwords[0])));
  for (var i = 0; i < passwords.length; i++) {
    const hash = await bcrypt.hash(passwords[i], saltRounds);
    hashes.push(hash);
  }
  const example = [
    {
      name: "eleson",
      password: bcrypt.hashSync(passwords[0]),
      time: [
        {
          day: "Mon",
          time: "A",
        },
        {
          day: "Mon",
          time: "B",
        },
      ],
      onduty: new Date("2021-12-02T05:51:04.360Z"),
    },
    {
      name: "eleson1",
      password: bcrypt.hashSync(passwords[1]),
      time: [
        {
          day: "Mon",
          time: "A",
        },
        {
          day: "Mon",
          time: "C",
        },
      ],
    },
    {
      name: "eleson2",
      password: bcrypt.hashSync(passwords[2]),
      time: [
        {
          day: "Mon",
          time: "A",
        },
        {
          day: "Mon",
          time: "C",
        },
      ],
    },
    {
      name: "eleson3",
      password: bcrypt.hashSync(passwords[3]),
      time: [
        {
          day: "Mon",
          time: "A",
        },
        {
          day: "Mon",
          time: "B",
        },
      ],
    },
  ];
  if (true) {
    await Staff.deleteMany({});
    await Staff.insertMany(example);
  }
};

const dataFind = async () => {
  const data = await Staff.find();
  console.log(data.sort());
};

export { dataInit, dataFind };
