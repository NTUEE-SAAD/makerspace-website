import { useRef, useEffect } from "react";
import AwesomeCalendar from "react-awesome-calendar";
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
  return <AwesomeCalendar ref={calendarRef} />;
};
