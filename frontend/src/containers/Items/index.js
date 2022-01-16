import { useState } from "react";
import { Row, Col, ConfigProvider } from "antd";
import { SearchItem, BorrowItem, ReturnItem } from "../../components";
import zh_TW from "antd/lib/locale/zh_TW";
import styles from "./styles.module.css";

export const Items = ({ isStaff = false }) => {
  const [toborrow, setToborrow] = useState([]);
  return (
    <ConfigProvider locale={zh_TW}>
      <div style={{ margin: "7vh 0" }}>
        <Row justify="space-around" className={styles.row}>
          <SearchItem toborrow={toborrow} setToborrow={setToborrow} />
        </Row>
        {isStaff && (
          <>
            <Row justify="space-around" className={styles.row}>
              <BorrowItem toborrow={toborrow} setToborrow={setToborrow} />
            </Row>
            <Row justify="space-around" className={styles.row}>
              <ReturnItem />
            </Row>
          </>
        )}
      </div>
    </ConfigProvider>
  );
};
