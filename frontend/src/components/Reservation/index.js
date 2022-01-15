import { Button, Modal } from "antd";
import { useState } from "react";
import React from "react";
import { ReservationForm } from "./ReservationForm";
import useReservation from "./useReservation";

export const Reservation = (props) => {
  const { instrument, onCancel, visible } = props;
  const [modalLoading, setModalLoading] = useState(false);

  const {
    name,
    setName,
    id,
    setId,
    mail,
    setMail,
    useNTUMail,
    date,
    setDatetime,
    setDate,
    onUseNTUMail,
    handleChange,
    handleSubmit,
  } = useReservation();

  return (
    <Modal
      title={`${instrument} Reservation`}
      visible={visible}
      onCancel={onCancel}
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
      <ReservationForm
        name={name}
        setName={setName}
        id={id}
        setId={setId}
        mail={mail}
        setMail={setMail}
        useNTUMail={useNTUMail}
        date={date}
        setDate={setDate}
        setDatetime={setDatetime}
        onUseNTUMail={onUseNTUMail}
        handleChange={handleChange}
      />
    </Modal>
  );
};
