import styled from "styled-components";
import { Calendar } from "react-datepicker2";

export const StyledCalendar = styled(Calendar)`
  && {
    position: relative;
    border-radius: 4px;
    box-shadow: none;
    width: auto;
    margin: auto;
    text-align: center;
    padding: 15px;
    background-color: #fff;
    margin-top: 20px;
    padding: 0;
    border: none !important;
  }
  && .selectToday {
    display: none !important;
  }
  && .calendarContainer .heading {
    height: auto;
    font-weight: 700;
    margin-bottom: 10px;
}
  && .daysOfWeek{
    padding: 0;
    margin: 0;
  }
  && .daysOfWeek > div {
    padding: 10px;
    border-right: 1px solid #CAD2DA;
    border-top: 1px solid #CAD2DA;
    background: #E8EEF3;
  }
  && .daysOfWeek > div:first-child {
    border-left: 1px solid #CAD2DA;
  }
  && .daysOfWeek + div {
    border-left: 1px solid #CAD2DA;
    border-bottom: 1px solid #CAD2DA;
  }
  && .dayWrapper button {
    font-size: 12px;
    width: 30px;
    height: 30px;
    margin: 5px 0;
}

&& .selected button, && .selected button:active, && .selected button:focus, && .selected button:hover {
    background-color: #386583;
    color: #fff;
    border-color: #386583 !important;
}
  && .dayWrapper {
    float: left;
    width: 14.28571429%;
    margin-top: 5px;
    position: relative;
    border: 1px solid #CAD2DA;
    margin: 0;
    font-size: 12px;
    border-bottom: 0;
    border-left: 0;
}
&& .today button {
    border: 3px solid #386583!important;
}
&& .title{
  border:none !important;
}
`;
