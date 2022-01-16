import ModAwesomeCalendar from "./AwesomeCalendar";
import "react-calendar/dist/Calendar.css";
import { Text } from "..";

/**
 * 
 * @param {*} [{
    id: 3,
    color: "#3694DF",
    from: "2022-01-25T13:00:00+00:00",
    to: "2022-01-25T20:00:00+00:00",
    title: "專題說明會",
  },] 
 * @returns 
 */
export const Calendar = ({events}) => {
  return (
    <>
      <Text.SectionTitle.Black>月曆</Text.SectionTitle.Black>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "1vh 1vw 1vh 1vw",
          borderRadius: "2px",
        }}
      >
        <ModAwesomeCalendar events={events} />
      </div>
    </>
  );
};
