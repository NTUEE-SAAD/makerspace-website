import React from "react";
import styles from "./Day.styles.module.css";
import classnames from "classnames";
import Event from "./Event";
import { getElementHeight } from "../util/getElementHeight";
import { getDate } from "../util/date";
import { Tooltip, Button } from "antd";

export default class Day extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      eventNumber: 1,
    };
  }

  componentDidMount() {
    // this.shouldShowRemainder();
  }

  componentDidUpdate() {
    // this.shouldShowRemainder();
  }

  isCurrentDate() {
    const date = this.props.date.getTime();
    const currentDate = getDate(new Date()).getTime();
    return date === currentDate;
  }

  returnDayClassStyle() {
    let className = [styles.dayDate];
    if (!this.props.current) {
      className.push(styles.inactiveDay);
    }
    return classnames(className);
  }

  shouldShowRemainder() {
    const { events } = this.props;
    if (Array.isArray(events) && events.length) {
      const dayCell = document.getElementById("dayCell");
      const dayCellHeight = getElementHeight(dayCell);

      const dayHeader = document.getElementById("dayHeader");
      const dayHeaderHeight = getElementHeight(dayHeader);

      const eventsList = document.getElementsByClassName("dayCellEvent");
      const singleEvent = eventsList[0];
      const singleEventHeight = getElementHeight(singleEvent);

      const remainingTextHeight = 16;

      const eventGroupHeight =
        dayCellHeight - dayHeaderHeight - remainingTextHeight;

      const numberOfEventsToDisplay = Math.floor(
        eventGroupHeight / singleEventHeight
      );

      this.setState({
        eventNumber: numberOfEventsToDisplay,
      });
    }
  }

  returnEventList() {
    const { events } = this.props;
    if (Array.isArray(events) && events.length) {
      let displayEvents = events.slice(0, this.state.eventNumber);
      return (
        <div className={styles.dayCellEventWrapper}>
          {this.returnEvents(displayEvents)}
        </div>
      );
    }
  }

  returnEvents(events) {
    return events.map((event) => {
      return (
        <Event
          height={16}
          inactive={!this.props.current}
          key={event.id}
          color={event.color}
          title={event.title}
          position={event.position}
          // onClick={() => this.props.onClickEvent && this.props.onClickEvent(event)}
        />
      );
    });
  }

  returnEventRemainder() {
    const { events } = this.props;
    const { eventNumber } = this.state;
    if (Array.isArray(events) && events.length > eventNumber) {
      const remainder = events.length - eventNumber;
      return (
        <span className={styles.dayEventsRemaining}>
          {`${remainder} more...`}
        </span>
      );
    }
  }

  returnDayTextClass() {
    let className = [styles.dayText];
    if (this.isCurrentDate()) {
      className.push(styles.currentDay);
    }
    return classnames(className);
  }

  render() {
    const { events } = this.props;
    let title = "";
    if(events){
      events.forEach(event => {
        if(title === "") title = event.title;
        else title = title + ", " + event.title;
      });
    }
    
    return (
      <Tooltip
        title={title}
        placement="topLeft"
        mouseEnterDelay="0"
        mouseLeaveDelay="0"
        color={events?events[0].color:""}
      >
        <div
          id="dayCell"
          className={styles.dayCell}
          onClick={this.props.onClickDay}
        >
          <div id="dayHeader" className={this.returnDayClassStyle()}>
            <div className={this.returnDayTextClass()}>
              <span>{this.props.date.getDate()}</span>
            </div>
          </div>
          {/* <Tooltip title="prompt text">
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip> */}
          {this.returnEventList()}
          {this.returnEventRemainder()}
        </div>
      </Tooltip>
    );
  }
}
