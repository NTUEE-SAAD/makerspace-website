import { useRef, useEffect } from "react";
import { Calendar as AntdCalendar } from "antd";

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
  return <AntdCalendar ref={calendarRef} fullscreen={false} />;
};
