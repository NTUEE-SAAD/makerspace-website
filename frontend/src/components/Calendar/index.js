import { useRef, useEffect } from "react";
import ModAwesomeCalendar from "./MyCalendar";
import "react-calendar/dist/Calendar.css";
import { Text } from "..";

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
  return (
    <>
      <Text.SectionTitle.Black>Calendar</Text.SectionTitle.Black>
      <div 
          style={{
            backgroundColor: "#ffffff",
            padding: "1vh 1vw 1vh 1vw",
            borderRadius: "2px",
        }}
      >
        <ModAwesomeCalendar ref={calendarRef} />
      </div>
    </>
  );
};
