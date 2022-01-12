import { Card, Progress, Typography } from "antd";

export const Instrument = () => {
  return (
    <Card size="small" title="small size card" style={{ aspectRatio: 1 / 1 }}>
      <Typography.Text size="small">name: 3DP</Typography.Text>
      <Progress percent={30} size="small" />
      <Typography.Text size="small">time: 3:00:00</Typography.Text>
    </Card>
  );
};
