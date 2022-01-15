import { useState } from "react";
import { request } from "../../instance";
import { message } from "antd";

const useReservation = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [privateMail, setPrivateMail] = useState("");
  const [useNTUMail, setUseNTUMail] = useState(false);
  const [datetime, setDatetime] = useState(new Date().toISOString());
  const handleChange = (setState) => {
    return (e) => {
      setState(e.target.value);
    };
  };

  const onUseNTUMail = () => {
    setUseNTUMail(!useNTUMail);
  };

  const email = useNTUMail ? `${id}@ntu.edu.tw` : privateMail;
  const setEmail = useNTUMail ? onUseNTUMail : handleChange(setPrivateMail);

  const setDate = (value) => {
    const time = datetime.split("T")[1];
    const date = value.format().split("T")[0];
    setDatetime(`${date}T${time}`);
  };

  const setTime = (value) => {
    const time = value.format().split("T")[1];
    const date = datetime.split("T")[0];
    setDatetime(`${date}T${time}`);
  };

  const handleSubmit = async (instrument) => {
    await request({
      method: "POST",
      url: "/instrument/reservation",
      data: {
        user: {
          name,
          id,
          email,
        },
        instrument,
        date: datetime,
      },
    });
    message.success("預約成功");
  };

  const clearData = () => {
    setName("");
    setId("");
    setPrivateMail("");
    setUseNTUMail(false);
    setDatetime("");
  };

  return {
    name,
    setName,
    id,
    setId,
    privateMail,
    setPrivateMail,
    email,
    setEmail,
    useNTUMail,
    datetime,
    setDate,
    setTime,
    onUseNTUMail,
    handleChange,
    handleSubmit,
    clearData,
  };
};

export default useReservation;
