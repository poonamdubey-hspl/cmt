import React, { Component } from "react";
import {
  TabPane,
  Nav,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import EventCalendar from "../../utils/Calendar/Calendar";
import UpcomingEvents from "../../common/components/UpcomingEvents/UpcomingEvents";
import calendar from "../../assets/images/calendar.svg";
import upcomingevent from "../../assets/images/upcoming-event.svg";
import { StyledCard , StyledCardTitle ,StyledCardText , Span, CalendarBlock, StyledNavItem, StyledTabContent } from './Style';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      activeTabcal: "4"
    };
  }

  togglenew(tab) {
    console.log(tab, "tab");
    if (this.state.activeTabcal !== tab) {
      this.setState({
        activeTabcal: tab
      });
    }
  }
  render() {
    return (
      <CalendarBlock>
        <Nav tabs>
          <StyledNavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTabcal === "4"
              })}
              onClick={() => {
                this.togglenew("4");
              }}
            >
              <img src={calendar} alt="calendar" />
              <span>Calendar</span> 
            </NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTabcal === "5"
              })}
              onClick={() => {
                this.togglenew("5");
              }}
            >
              <img src={upcomingevent} alt="upcomingevent" />
              <span> Upcoming Events</span>
            </NavLink>
          </StyledNavItem>
        </Nav>
        <StyledTabContent activeTab={this.state.activeTabcal}>
          <TabPane tabId="4">
            <div className="md-switching-view-cont">
              <EventCalendar />
              <StyledCard>
                <Span>Today</Span>
                <StyledCardTitle>
                  Consectetur adipiscing elit. Morbi id neque
                </StyledCardTitle>
                <StyledCardText>
                  <span>
                    <i class="fas fa-clock" />10:30 AM - 11:30 AM
                  </span>
                </StyledCardText>
              </StyledCard>
              <StyledCard>
                <Span>Today</Span>
                <StyledCardTitle>
                  Consectetur adipiscing elit. Morbi id neque
                </StyledCardTitle>
                <StyledCardText>
                  <span>
                    <i class="fas fa-clock" />10:30 AM - 11:30 AM
                  </span>
                </StyledCardText>
              </StyledCard>
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div className="md-switching-view-cont">
              <UpcomingEvents />
            </div>
          </TabPane>
        </StyledTabContent>
      </CalendarBlock>
    );
  }
}

export default Calendar;
