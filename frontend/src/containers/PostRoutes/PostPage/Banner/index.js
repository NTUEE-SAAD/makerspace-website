import QueueAnim from "rc-queue-anim";
import styles from "./styles.module.css";
import faker from "faker";
import { Typography } from "antd";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <QueueAnim key="QueueAnim" type={["bottom", "top"]} delay={200}>
        <div className={styles.textWrapper}>
          <Typography.Title style={{ color: "white" }}>
            {faker.lorem.sentence()}
          </Typography.Title>
        </div>
      </QueueAnim>
    </div>
  );
};
