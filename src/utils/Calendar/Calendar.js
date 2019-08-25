import React, { Component } from "react";
import moment from "moment";
import { StyledCalendar } from "./Style";
class EventCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: moment(),
      isGregorian: true
    };
    this.eventdate = "";
    this.disabledRanges = [
      {
        start: moment("2019-08-08", "days"),
        end: moment("2019-16-08", "days")
      },
      {
        color: "transparent",
        start: moment().add(9, "days"),
        end: moment().add(9, "days")
      },
      {
        color: "transparent",
        start: moment().add(11, "days"),
        end: moment().add(11, "days")
      },
      {
        color: "transparent",
        start: moment().add(13, "days"),
        end: moment().add(13, "days")
      }
    ];
  }

  OnclickDate = value => {
    this.setState({ value: value }, () => {});
  };

  render() {
    var a = new Date("4/30/2016");
    return (
      <StyledCalendar
        className="eventDate"
        ranges={this.disabledRanges}
        value={this.state.value}
        inputFormat="YYYY-M-D"
        onChange={this.OnclickDate.bind()}
      />
    );
  }
}

export default EventCalendar;
