import { Button, Modal } from "antd";
import { useState } from "react";
import ReservationForm from "./ReservationForm";

export const Reservation = (props) => {
  const { onCancel, visible } = props;
  const [modalLoading, setModalLoading] = useState(false);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Modal
      title="Not submitted"
      visible={visible}
      onCancel={onCancel}
      onChange={onChange}
      confirmLoading={modalLoading}
      footer={
        <>
          <Button onClick={onCancel}>cancel</Button>
          <Button type="primary">submit</Button>
        </>
      }
    >
      <ReservationForm />
    </Modal>
  );
};
