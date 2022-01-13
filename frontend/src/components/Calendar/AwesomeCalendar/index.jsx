import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.styles.module.css';
import Header from './Header';
import Monthly from './Monthly';
import {monthlyMode} from './constants/index';
import { formatEvents } from './util/calendar';
import { calendarDetails } from './util/calendarDetails';

//TODO: Upcoming features:
//set beginning day of the week
//be able to export Yearly, Monthly and Daily

const modes = {
  month: monthlyMode,
};

class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    const currentDate = new Date();
    this.state = {
      mode: monthlyMode,
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    };
    this.onClickDay = this.onClickDay.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
  }


  // necessary
  returnCalendar() {
    const events = formatEvents(this.props.events);
    console.log("function: returnCalendar")
    switch (this.state.mode) {
      case monthlyMode:
        return (
          <Monthly
            month={this.state.month}
            year={this.state.year}
            events={events}
            onClickDay={this.onClickDay}
            onClickPrev={this.onClickPrev}
            onClickNext={this.onClickNext}
          />
        );
    }
  }

  // needs modify
  onClickDay(date) {
    console.log(date)
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    this.setState({
        mode: monthlyMode,
        day,
        month,
        year,
      },
      this.onChange,
    );
    return (<div>hehehe</div>);
  }

 

  // necessary
  onClickPrev() {
    console.log("function: onClickPrev")
    const { mode, year, month, day } = this.state;
    const details = calendarDetails(mode, year, month, day);
    this.setState({ ...details.prev }, this.onChange);
  }

  // necessary
  onClickNext() {
    console.log("function: onClickNext")
    const { mode, year, month, day } = this.state;
    const details = calendarDetails(mode, year, month, day);
    this.setState({ ...details.next }, this.onChange);
  }


  // necessary
  onChange() {
    console.log("function: onChange")
    if (this.props.onChange) {
      this.props.onChange(this.getDetails());
    }
  }

  // necessary
  returnHeader() {
    console.log("function: returnHeader")
    const { mode, year, month, day } = this.state;
    const props = {
      ...calendarDetails(mode, year, month, day),
      mode,
      onClickPrev: this.onClickPrev,
      onClickNext: this.onClickNext,
    };
    if (this.props.header) {
      let CustomHeader = this.props.header;
      return <CustomHeader {...props} />;
    }
    return <Header {...props} />;
  }

  render() {
    return (
      <div className={styles.calendarWrapper}>
        
        {this.returnHeader()}
        {this.returnCalendar()}
      </div>
    );
  }
}

Calendar.propTypes = {
  modes: PropTypes.array,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  onClickEvent: PropTypes.func,
  header: PropTypes.func,
};

export default Calendar;
