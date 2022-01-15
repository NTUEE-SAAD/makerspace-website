import { useState } from "react";

export const useReservation = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  return { name, setName, email, setEmail, id, setId };
};
