import { useState } from "react";

export const useReservation = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  console.log(name, id, email);


  return { name, setName, email, setEmail, id, setId };
};
