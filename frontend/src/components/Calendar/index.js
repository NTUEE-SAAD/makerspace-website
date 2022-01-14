import ModAwesomeCalendar from "./AwesomeCalendar";
import "react-calendar/dist/Calendar.css";
import { Text } from "..";


const events = [{
  id: 1,
  color: '#fd3153',
  from: '2022-01-02T18:00:00+00:00',
  to: '2022-01-02T19:00:00+00:00',
  title: '部課'
}, {
  id: 2,
  color: '#1ccb9e',
  from: '2022-01-11T13:00:00+00:00',
  to: '2022-01-15T14:00:00+00:00',
  title: 'MakeNTU'
}, {
  id: 3,
  color: '#3694DF',
  from: '2022-01-25T13:00:00+00:00',
  to: '2022-01-25T20:00:00+00:00',
  title: '專題說明會'
}];

export const Calendar = () => {
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
        <ModAwesomeCalendar events={events}/>
      </div>
    </>
  );
};
