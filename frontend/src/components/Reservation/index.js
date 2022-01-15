import { Button, Modal } from "antd";
import { useState} from "react";
import React from "react";
import {ReservationForm} from "./ReservationForm";

export const Reservation = (props) => {
  const { instrument, onCancel, visible } = props;
  const [modalLoading, setModalLoading] = useState(false);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const formRef = React.createRef();
  const handleSubmit = () => formRef.current.submit();

  return (
    <Modal
      title={`${instrument} Reservation`}
      visible={visible}
      onCancel={onCancel}
      onChange={onChange}
      confirmLoading={modalLoading}
      footer={
        <>
          <Button onClick={onCancel}>cancel</Button>
          <Button type="primary" onClick={handleSubmit}>
            submit
          </Button>
        </>
      }
    >
      <ReservationForm formRef={formRef} />
    </Modal>
  );
};
