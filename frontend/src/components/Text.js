// import styled from "styled-components";
import { Typography } from "antd";

const White = ({ children }) => (
  <Typography style={{ color: "white" }}>{children}</Typography>
);

const SectionTitle = {
  Black: ({ children }) => (
    <Typography.Title level={2}>{children}</Typography.Title>
  ),
  White: ({ children }) => (
    <Typography.Title level={2} style={{ color: "white" }}>
      {children}
    </Typography.Title>
  ),
};

export const Text = {
  White,
  SectionTitle,
};
