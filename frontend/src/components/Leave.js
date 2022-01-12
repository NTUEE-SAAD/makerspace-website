import { DatePicker, Input, Button, message} from "antd";
import { useState } from "react";


export const Leave = () => {
    const displayStatus = (payload) => {
        if (payload.msg) {
            const { type, msg } = payload;
            const content = {
            content: msg,
            duration: 0.5,
            };
            switch (type) {
            case "success":
                message.success(content);
                break;
            case "error":
            default:
                message.error(content);
                break;
            }
        }
    }   

    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [reason, setReason] = useState()

    function dateChange(date, dateString) {
        console.log(date, dateString);
        setDate(dateString)
    }

    function timeChange(time, timeString) {
        console.log(time, timeString);
        setTime(timeString)
    }

    function submit(){
        if (!time || !reason || !date){
            displayStatus({
                type: "error",
                msg: "Please enter leave date, time, and reason",
              });
        }else{
            //something to the backend
            console.log("success")
            console.log(date, time, reason)
        }
    }

    return (
        <div>
            <h2>Leave Application</h2>
            <div>
                <DatePicker onChange={dateChange}/>
                <DatePicker onChange={timeChange} picker="time"/>
                <Input placeholder="Reason" onChange={(e) => setReason(e.target.value)}></Input>
                <Button type="primary" onClick={submit}>Submit</Button>
            </div>
        </div>
      
    );
  };
  