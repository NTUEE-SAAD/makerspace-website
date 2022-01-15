import {
  Input,
  DatePicker,
  TimePicker,
  Checkbox,
  Typography,
  Row,
  Col,
  Divider,
} from "antd";

export const ReservationForm = (props) => {
  const {
    name,
    setName,
    id,
    setId,
    mail,
    setMail,
    useNTUMail,
    datetime,
    setDate,
    setTime,
    onUseNTUMail,
    handleChange,
  } = props;

  return (
    <>
      <Row gutters={[15, 32]} align="middle">
        <Col span={6} align="right" justify="center">
          Your Name:
        </Col>
        <Col span={1} />
        <Col span={15}>
          <Input
            style={{ width: "80%" }}
            size="default"
            value={name}
            onChange={handleChange(setName)}
            placeholder="Your Name"
          />
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row gutters={[15, 32]} align="middle">
        <Col span={6} align="right" justify="center">
          Student ID:
        </Col>
        <Col span={1} />
        <Col span={15}>
          <Input
            style={{ width: "80%" }}
            size="default"
            value={id}
            onChange={handleChange(setId)}
            placeholder="Student ID"
          />
        </Col>
        <Col span={3}></Col>
      </Row>
      <Divider />
      <Row gutters={[15, 32]} align="middle">
        <Col span={6} align="right" justify="center">
          Date & Time:
        </Col>
        <Col span={1} />
        <Col span={15}>
          <DatePicker
            value={datetime}
            onChange={setDate}
            format={"YYYY-MM-DD"}
            style={{ width: "80%" }}
          />
          <TimePicker
            value={datetime}
            onChange={setTime}
            format={"hh:mm"}
            style={{ width: "80%" }}
          />
        </Col>
        <Col span={3}></Col>
      </Row>
      <Divider style={{ margin: "12 0" }} />
      <Row gutters={[15, 32]} align="middle">
        <Col span={6} align="right" justify="center"></Col>
        <Col span={1} />
        <Col span={15}>
          <Checkbox
            onChange={onUseNTUMail}
            checked={useNTUMail}
            style={{ width: "100%" }}
          >
            Use NTU Mail
          </Checkbox>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row gutters={[15, 32]} align="middle">
        <Col span={6} align="right" justify="center">
          Email:
        </Col>
        <Col span={1} />
        <Col span={15}>
          <Input
            style={{ width: "80%" }}
            size="default"
            value={mail}
            onChange={setMail}
          />
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row gutters={[15, 32]} align="middle">
        <Col span={6} align="right" justify="center"></Col>
        <Col span={1} />
        <Col span={15}>
          <Typography.Text type="secondary">
            填寫以接收預約更改代碼
          </Typography.Text>
        </Col>
        <Col span={3}></Col>
      </Row>
    </>
  );
};
