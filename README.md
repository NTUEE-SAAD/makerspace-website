# makerspace-website

## [WP1101 ReadMe](https://hackmd.io/@dSpEyyWWQYaN4gOKsy7saw/BJiOHiIvK)

## 前端

- 勞志毅 莊加旭 江秉城 周柏融

## 後端

- 莊詠翔 黃柏穎 周柏融

## 功能列表

### 介紹

- 部門介紹內文（負責業務、部課內容...)：可以用 markdown 編輯
- 部長小卡
  - 名字
  - 圖片
  - email 連結
  - facebook 連結

### 佈告欄

- 開放期間
- 公告近期 mks 正在進行的活動，例如：籌備 MakeNTU、光舞、小 project...
- 今日入場人數，整合門禁系統

### 管理員值班

- 上班簽到、請假、做完事打勾勾
- 預約服務通知

### 機台預約

- 顯示雷切、3DP 是否使用狀況
  - 正在使用
  - 排隊人數
  - 等候時間
  - Health
    ![](https://i.imgur.com/gq1eUwj.png)

### 物品查詢/借用/歸還功能

- Google Sheet 後端
- 使用之前的自動寄信程式達成一鍵催歸還的功能
- 材料借用狀態
- 材料存量
- 製作方便美觀的歸還系統，可以快速篩選

### 部課

- 部課資訊
- 報名

### 機台、材料、工具介紹文件

- 連到 MakerMaual Notion

### Project 展示

- 以貼文形式呈現
- 希望有標籤功能
- 展示歷年在 mks 完成的 projects

### 使用者

- 可以知道現在自己有借哪些材料還沒還
-

## 後端程式

#### 機台

#### 物品

- 催歸還（只要 server 有跑起來就要一直倒數）

####

## API

### /staff

#### GET /staff

- 回傳所有管理員資料
- return list of staffs

#### return format

```json=
[
    {
        "name": "Ric",
        "time": [
            {
                "day": "Mon|Tue|Wed|Thu|Fri",
                "time": "A|B|C|D"
            },
        ]
    }
]
```

#### POST /staff/notify={Date()}

- 通知被預約
-

#### POST /staff/signin

#### query type

```json=
{
    "name": "Ric",
    "time": Date()
}
```

#### POST /staff/leave

```json=
{
    ""
}
```

### /instruments

- 機台

#### GET /instruments/status

- 機台使用狀況

#### return format

```json=
{
    "X1E-Plus":{
        "available": true,
        "healthy": true, //能用嗎？
        "busyUntil": Date()
    },
    "HyperCube":{},
    "Formlab":{},
    "Anycubic" :{},
    "ThunderLaser":{},
    "GreenLaser":{}
}
```

#### POST /instrument/reservation

- 機台預約

#### query format

```json=
{
    "time": Date(),
    "user" : {
        "name": "王小明",
        "id" : "B08901000"
    },
    "instrument" : "X1E-Plus|HyperCube|Formlab|Anycubic|ThunderLaser|GreenLaser",
    "uuid": uuid()
}
```

#### return format

```json=
uuid前6碼.to_lowercase()
// 使用者要更改時段時使用
```

#### PUT /instrument/reservation

- 改時段

### /items

- 物品借用狀況

#### GET /staff/items

#### POST /staff/borrow

```json=
[
    {
        "name": "STM",
        "type": "board|motor|module",
        "location": ["A", "5", "1"],
        "quantity": 5|-1, //-1=don't need to return
        "excel":"A1notation"
    },
    { }
]
```

### DELETE /staff/return

- 物品借用

```json=
{
    {
        "name": "STM",
        "type": "board|motor|module",
        "location": ["A", "5", "1"],
        "quantity": 5|-1, //-1=don't need to return
        "excel":"A1notation"
    }, {}
}
```

### /activities

- 部課

#### GET /activities

- 部課資訊

#### POST /class/signUp

#### POST /post

post

```json=
{
    title: "i am a title",
    content: "lorem ipsum ...",
    description: ["Make NTU", "Maker"], // Tags
    image: "/image/url"
}
```

#### GET /posts

return a list of posts defined above
