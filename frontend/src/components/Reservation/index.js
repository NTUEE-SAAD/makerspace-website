import { Button, Modal } from "antd";
import React from "react";
import { ReservationForm } from "./ReservationForm";
import useReservation from "./useReservation";

export const Reservation = (props) => {
  const { instrument, onCancel, visible } = props;

  const {
    name,
    setName,
    id,
    setId,
    email,
    setEmail,
    useNTUMail,
    date,
    setDatetime,
    setDate,
    onUseNTUMail,
    handleChange,
    handleSubmit,
    setTime,
    clearData,
  } = useReservation();

  const handleCancel = () => {
    clearData();
    onCancel();
  };

  const handleClick = async () => {
    const close = await handleSubmit(instrument);
    if(close) handleCancel();
  };

  return (
    <Modal
      title={`${instrument} 預約`}
      visible={visible}
      onCancel={handleCancel}
      footer={
        <>
          <Button onClick={onCancel}>關閉</Button>
          <Button type="primary" onClick={handleClick}>
            預約
          </Button>
        </>
      }
    >
      <ReservationForm
        name={name}
        setName={setName}
        id={id}
        setId={setId}
        email={email}
        setEmail={setEmail}
        useNTUMail={useNTUMail}
        date={date}
        setDate={setDate}
        setTime={setTime}
        setDatetime={setDatetime}
        onUseNTUMail={onUseNTUMail}
        handleChange={handleChange}
      />
    </Modal>
  );
};
