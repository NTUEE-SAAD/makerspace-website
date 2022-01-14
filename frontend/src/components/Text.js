// import styled from "styled-components";
import { Typography } from "antd";

const White = ({ children }) => (
  <Typography.Text style={{ color: "white" }}>{children}</Typography.Text>
);

const SectionTitle = {
  Black: ({ children }) => (
    <Typography.Title level={3}>{children}</Typography.Title>
  ),
  White: ({ children }) => (
    <Typography.Title level={3} style={{ color: "white" }}>
      {children}
    </Typography.Title>
  ),
};

export const Text = {
  White,
  SectionTitle,
};
