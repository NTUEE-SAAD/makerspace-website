import { useState } from "react";
import {
  Layout,
  ConfigProvider,
  message,
  DatePicker,
  Input,
  Button,
  Select,
  Row,
  Col,
} from "antd";
import zh_TW from "antd/lib/locale/zh_TW";
import styled from "styled-components";
import { instance } from "../../instance";
export const Laser = () => {
  const Fa = styled.div`
    .iframe-container {
      overflow: hidden;
      /* 16:9 aspect ratio */
      padding-top: 56.25%;
      position: relative;
    }

    .iframe-container iframe {
      border: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  `;
  const displayStatus = (payload) => {
    if (payload.msg) {
      const { type, msg } = payload;
      const content = {
        content: msg,
        duration: 0.5,
      };
      switch (type) {
        case "success":
          message.success(content);
          break;
        case "error":
        default:
          message.error(content);
          break;
      }
    }
  };

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [laser, setLaser] = useState("");
  const [cost, setCost] = useState("");
  const [fileName, setFile] = useState("");
  const [ps, setPs] = useState("");

  const { Option } = Select;

  function submit() {
    if (!id || !name || !date || !laser || !cost || !fileName) {
      displayStatus({
        type: "error",
        msg: "Please enter all the following requirements",
      });
    } else {
      instance.post("/staff/sendLaser", {
        date: date,
        name: name,
        id: id,
        laser: laser,
        cost: cost,
        fileName: fileName,
        ps: ps,
      });
      displayStatus({
        type: "success",
        msg: "Logfile send success, please wait five minute to wait for sheets to update",
      });
    }
  }

  function dateChange(date, dateString) {
    console.log(date, dateString);
    setDate(dateString);
  }

  return (
    <ConfigProvider locale={zh_TW}>
      <Layout>
        <Layout.Content
          style={{
            width: "70%",
            margin: "5vh auto",
            justifyContent: "center",
          }}
        >
          <Fa>
            <div className="iframe-container">
              <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT1xtPF_2k1yyLvsWeBZMMKrdqEkY5_saDk2gCU8mruhXq7gLX7ue6DLL7WL4QYCGATt2PMKi6m7yDb/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
          </Fa>
          <Input.Group>
            <Row gutter={16}>
              <DatePicker onChange={dateChange} />
              <Col span={3}>
                <Input
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </Col>
              <Col span={3}>
                <Input
                  placeholder="id"
                  onChange={(e) => setId(e.target.value)}
                ></Input>
              </Col>
              <Select placeholder="Laser Machine" onChange={(e) => setLaser(e)}>
                <Option value="Thunder Laser">Thunder Laser</Option>
                <Option value="Green Laser">Green Laser</Option>
              </Select>
              <Col>
                <Input
                  placeholder="fileName"
                  onChange={(e) => setFile(e.target.value)}
                ></Input>
              </Col>
              <Col span={2}>
                <Input
                  placeholder="cost"
                  onChange={(e) => setCost(e.target.value)}
                ></Input>
              </Col>
              <Col>
                <Input
                  placeholder="備註"
                  onChange={(e) => setPs(e.target.value)}
                ></Input>
              </Col>
              <Button type="primary" onClick={submit}>
                Submit
              </Button>
              <Col></Col>
            </Row>
          </Input.Group>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
};
