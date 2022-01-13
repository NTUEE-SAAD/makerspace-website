import { useRef, useEffect } from "react";
import ModAwesomeCalendar from "./AwesomeCalendar";
import "react-calendar/dist/Calendar.css";
import { Text } from "..";

export const Calendar = () => {
  const calendarRef = useRef();
  
  return (
    <>
      <Text.SectionTitle.Black>Calendar</Text.SectionTitle.Black>
      <div 
          style={{
            backgroundColor: "#fff",
            padding: "1vh 1vw 1vh 1vw",
            borderRadius: "2px",
        }}
      >
        <ModAwesomeCalendar ref={calendarRef} />
      </div>
    </>
  );
};
