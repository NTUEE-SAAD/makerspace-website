import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { DownOutlined } from "@ant-design/icons";
import styles from "./banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <QueueAnim key="QueueAnim" type={["bottom", "top"]} delay={200}>
        <img
          className={styles.logo}
          src="/mkslogo-white-clean.png"
          alt="logo"
          key="logo"
        />
        <div className={styles.textWrapper}>
          {
            "NTUEE MakerSpace不只是個空間，他更像個品牌。"
          }
        </div>
      </QueueAnim>
      <TweenOne
        animation={{
          y: "-=20",
          yoyo: true,
          repeat: -1,
          duration: 1000,
        }}
      >
        <DownOutlined className={styles.arrow} style={{ color: "#f0f0f0" }} />
      </TweenOne>
    </div>
  );
};
