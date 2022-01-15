import { useState } from "react";
import moment from "moment";

const useReservation = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [privateMail, setPrivateMail] = useState("");
  const [useNTUMail, setUseNTUMail] = useState(false);
  const [date, setDate] = useState(moment());
  const handleChange = (setState) => {
    return (e) => {
      setState(e.target.value);
      console.log(e.target.value);
    };
  };

  const onUseNTUMail = () => {
    setUseNTUMail(!useNTUMail);
  };

  const mail = useNTUMail ? `${id}@ntu.edu.tw` : privateMail;
  const setMail = useNTUMail ? onUseNTUMail : handleChange(setPrivateMail);

  return {
    name,
    setName,
    id,
    setId,
    privateMail,
    setPrivateMail,
    mail,
    setMail,
    useNTUMail,
    setUseNTUMail,
    date,
    setDate,
    onUseNTUMail,
    handleChange,
  };
};

export default useReservation;
