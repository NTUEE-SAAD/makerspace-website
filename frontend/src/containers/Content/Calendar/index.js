import { useRef } from "react";
import { Calendar as AntdCalendar } from "antd";

export const Calendar = () => {
  const calendarRef = useRef();
  return <AntdCalendar forwardRef={calendarRef} fullscreen={false} />;
};
