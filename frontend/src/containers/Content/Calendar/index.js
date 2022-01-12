import { useRef, useEffect } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Calendar = () => {
  const calendarRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (!calendarRef?.current) {
        console.log("return");
        return;
      }
      console.log(calendarRef.current);
    }, 2000);
  });
  return <ReactCalendar ref={calendarRef} style={{ width: "100%" }} />;
};
