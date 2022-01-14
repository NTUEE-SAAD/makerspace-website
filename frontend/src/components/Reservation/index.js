import { Modal } from "antd";
import { useState } from "react";
import ReservationForm from "./ReservationForm";

export const Reservation = (props) => {
  const { onCancel, visible } = props;

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Modal title="Not submitted" visible={visible} onCancel={onCancel}>
      <ReservationForm />
    </Modal>
  );
};
