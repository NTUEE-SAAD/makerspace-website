import QueueAnim from "rc-queue-anim";
import styles from "./styles.module.css";
import { Typography } from "antd";

export const Banner = ({ title }) => {
  return (
    <div className={styles.banner}>
      <QueueAnim key="QueueAnim" type={["bottom", "top"]} delay={200}>
        <div className={styles.textWrapper}>
          <Typography.Title style={{ color: "white" }}>
            {title}
          </Typography.Title>
        </div>
      </QueueAnim>
    </div>
  );
};
