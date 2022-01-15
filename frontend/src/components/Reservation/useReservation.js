import { useState } from "react";
import moment from "moment";

const useReservation = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [privateMail, setPrivateMail] = useState("");
  const [useNTUMail, setUseNTUMail] = useState(false);
  const [datetime, setDatetime] = useState(moment().startOf('day'));
  const handleChange = (setState) => {
    return (e) => {
      setState(e.target.value);
    };
  };

  const onUseNTUMail = () => {
    setUseNTUMail(!useNTUMail);
  };

  const mail = useNTUMail ? `${id}@ntu.edu.tw` : privateMail;
  const setMail = useNTUMail ? onUseNTUMail : handleChange(setPrivateMail);

  const setDate = (value)=>{
    setDatetime(value.format());
    console.log("Formatted Selected Date: ", value.format());
  }

  const handleSubmit = ()=>{
    console.log(name, id, mail, datetime);
  }
  
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
    datetime,
    setDatetime,
    setDate,
    onUseNTUMail,
    handleChange,
    handleSubmit
  };
};

export default useReservation;
