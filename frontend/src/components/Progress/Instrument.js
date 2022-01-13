import { Card, Progress, Typography } from "antd";

export const Instrument = () => {
  return (
    <Card size="small" title="small size card">
      <Typography.Link size="small">name: 3DP</Typography.Link>
      <Progress percent={30} size="small" />
      <Typography.Link size="small">time: 3:00:00</Typography.Link>
    </Card>
  );
};
