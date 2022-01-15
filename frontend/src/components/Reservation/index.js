import { Button, Modal } from "antd";
import { useState, useRef } from "react";
import ReservationForm from "./ReservationForm";

export const Reservation = (props) => {
  const { onCancel, visible } = props;
  const [modalLoading, setModalLoading] = useState(false);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const formRef = useRef();
  const handleSubmit = () => formRef.current.submit();
  
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
