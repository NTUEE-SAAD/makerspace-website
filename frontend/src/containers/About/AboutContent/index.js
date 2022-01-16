import { Row, Col, Typography, Image } from "antd";
import faker from "faker";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <Row gutter={30}>
        <Col span={6}>
          <Image preview={false} src={"https://i.imgur.com/PoCLDd6.jpg"} />
        </Col>
        <Col span={18}>
          <div className={styles.textWrapper}>
            <Typography.Text>
              {
                "NTUEE MakerSpace不只是個空間，他更像個品牌。長久以來，這裡產出了無數的專題，甚至也是許多夢想的發源地。一個成功而日漸壯大的品牌，背後終究會需要一個良好的管理系統，這就是我們製作NTUEE MakerSpace服務網頁的動機。在MakerSpace服務網頁的引導下，使用者可以一覽整個MakerSpace提供的服務。例如行事曆上的近期部課、工作坊、休館時間等等。若有使用雷射雕刻機、光固化列印機或其他3D列印機的需求，都可以在網站上查看當前機台狀態，以及是否使用中，並預約一個有管理員在場的使用時間。預約成功後會收到信件，內含「預約id」可供更改預約時間。"
              }
            </Typography.Text>
          </div>
        </Col>{" "}
        <Col span={18}>
          <div className={styles.textWrapper}>
            <Typography.Text>
              {
                "若是借用器材或電子元件，也有頁面可以查詢庫存及存放位置。這些服務都可以增加MakerSpace的使用效率，當然也增進了推廣的效率。MakerSpace近年來都由管理員協助管理，而如今留下的工作紀錄也能更有系統地被保存。過往使用了許多Google表單保存這些資料，例如物品借用、雷切機以及各種3D列印機的使用、以及使用者登記表單。如今，管理員登入後，這些資料全會在database有系統地被保存。管理員還可以設定todo事項（例如換過濾機的水）、以及設定機台狀態，讓使用者看到某機台的剩餘等候時間。網站主頁還有許多貼文，當然後台會有編輯界面，可以讓管理員發布。貼文發布後，近期更新的幾篇會出現在頁首，這是讓同學們的作品被看到的好機會哦！"
              }
            </Typography.Text>
          </div>
        </Col>
        <Col span={6}>
          <Image preview={false} src={"https://i.imgur.com/CdpmPFX.jpg"} />
        </Col>
      </Row>
    </div>
  );
};
