import { createPost } from "./utility/post.js";
import { handleCreate } from "./utility/event.js";
import eventModel from "./models/event.js";
import postModel from "./models/post.js";
const posts = [
  {
    data: {
      title: "3DP部課回顧",
      content:
        "轉眼間本學期最後一堂部上完這學期的部課後，相信大家都具備一位Maker應有的基本能力了! 希望大家能多多利用MKS的資源，成為一位厲害的Maker💪💪再次感謝本堂部課的講師Alice Du 部課照片在底下的連結喔!🔗",
      description: ["部課", "3DP", "autoCAD"],
      image: [
        "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270219647_5071244696258882_6941515974139649566_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=VcQh1UBOfA8AX_xdazr&tn=a-9uhekoy48NCrAS&_nc_ht=scontent-tpe1-1.xx&oh=00_AT_2w9FjM-X4U6nnRslvWVl_A2nNcR37w-B2IG_L-3KnWA&oe=61E85305",
      ],
    },
  },
  {
    data: {
      title: "期末考周閉館公告",
      content:
        "12/29-1/11係屬校訂期末考週當週及前一週，MakerSpace管理員不強制值班，故本空間暫不開放🚫若有使用需求可私訊粉專協調管理員到場，或聯絡認識的管理員喔!",
      description: ["公告"],
      image: [
        "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/269822637_5071202972929721_1594870518054575691_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=WKc_56kTjUYAX-S0uE7&_nc_ht=scontent-tpe1-1.xx&oh=00_AT95jVw9D3BAU7lCPSHEh36GkmoyriyjjslsSPHC_o0SuQ&oe=61E7709F",
      ],
    },
  },
  {
    data: {
      title: "IG帳號",
      content:
        "身為一個現代人，怎麼可以沒有instagram帳號呢經過一段時間的準備，我們MakerSpace終於有自己的ig帳號了🎉🎉🎉不同於Facebook粉專用來公布活動和各式公告，這裡有獨立的內容，會不定時分享各種maker知識，厲害的專案以及製作經驗，立志成為making大師、想實現自己天馬行空的創意或想透過自己的雙手解決生活中的問題的人絕對不能錯過!!",
      description: ["公告", "instagram"],
      image: [
        "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/269692460_5045739215476097_2870427393194711836_n.png?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=UhuoL6Je0BEAX_12AlM&_nc_ht=scontent-tpe1-1.xx&oh=00_AT-etKJ65tnuz9YXTLdZPcNv-tV4ecfA6zHhGLpeZH47wg&oe=61E8736B",
      ],
    },
  },
];
const events = [
  {
    data: {
      id: "d30c7c97-80b6-4884-aade-dc2df84da2a6",
      color: "#FF0000",
      from: "2022-02-08T15:04:09.882Z",
      to: "2022-02-20T10:24:09.882Z",
      title: "大掃除",
      _id: "61e3c20f22f947bfb58b03a7",
    },
  },
  {
    data: {
      id: "d30c7c97-80b6-4884-aade-dc2df84da2a6",
      color: "#FF00FF",
      from: "2022-01-17T15:04:09.882Z",
      to: "2022-01-21T10:24:09.882Z",
      title: "專題說明會",
      _id: "61e3c20f22f947bfb58b03a7",
    },
  },
  {
    data: {
      id: "d30c7c97-80b6-4884-aade-dc2df84da2a6",
      color: "#FF0000",
      from: "2022-01-25T15:04:09.882Z",
      to: "2022-01-25T10:24:09.882Z",
      title: "焊接部課",
      _id: "61e3c20f22f947bfb58b03a7",
    },
  },
  {
    data: {
      id: "d30c7c97-80b6-4884-aade-dc2df84da2a6",
      color: "#006688",
      from: "2022-01-23T15:04:09.882Z",
      to: "2022-01-23T10:24:09.882Z",
      title: "大掃除",
      _id: "61e3c20f22f947bfb58b03a7",
    },
  },
];

export const postsInit = async () => {
  await postModel.deleteMany({});
  posts.forEach(async (post) => {
    const res = await createPost(post.data);
    console.log(res);
  });
};

export const eventInit = async () => {
  events.forEach(async (event) => {
    console.log(event.data);
    await eventModel.deleteMany({});
    const res = await handleCreate(event.data, {
      status: () => {
        return { send: () => {} };
      },
    });
    console.log(res);
  });
};
