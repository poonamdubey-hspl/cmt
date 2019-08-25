import React, { Component } from "react";
import { Dropdown, DropdownMenu, DropdownItem, Button } from "reactstrap";
import {
  Headerinfo,
  Linktext,
  Notificationmain,
  Div,
  Span,
  PayButton,
  StyledDropdownToggle,
  StyledA
} from "./Style";
import notification from "../../../../assets/images/notification.svg";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.dropdowntoggle = this.dropdowntoggle.bind(this);
    this.Notificationtoggle = this.Notificationtoggle.bind(this);
    this.profiletoggle = this.profiletoggle.bind(this);
    this.state = {
      dropdownOpen: false,
      NotifdropdownOpen: false,
      profdropdownOpen: false,
      collapsed: true,
      activeTabcal: "4",
      activeTab: "1",
      view: "month",
      myEvents: [],
      collapsed: true,
      calView: {
        calendar: { type: "month" },
        eventList: { type: "month", scrollable: true }
      }
    };
  }

  // toggle(tab) {
  //   if (this.state.activeTab !== tab) {
  //     this.setState({
  //       activeTab: tab
  //     });
  //   }
  // }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  togglenew(tab) {
    console.log(tab, "tab");
    if (this.state.activeTabcal !== tab) {
      this.setState({
        activeTabcal: tab
      });
    }
  }
  dropdowntoggle() {
    this.setState(prevState => ({
      NotifdropdownOpen: false,
      profdropdownOpen: false,
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  Notificationtoggle() {
    this.setState(prevState => ({
      dropdownOpen: false,
      profdropdownOpen: false,
      NotifdropdownOpen: !prevState.NotifdropdownOpen
    }));
  }
  profiletoggle() {
    this.setState(prevState => ({
      dropdownOpen: false,
      NotifdropdownOpen: false,
      profdropdownOpen: !prevState.profdropdownOpen
    }));
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const notificationLimit = 2;
    return (
      <Headerinfo>
        <Dropdown
          isOpen={this.state.NotifdropdownOpen}
          onClick={this.Notificationtoggle}
          toggle={this.toggle}
        >
          <StyledDropdownToggle caret>
            <i>
              <img src={notification} />
            </i>
            <Linktext>Notification</Linktext>
          </StyledDropdownToggle>

          <DropdownMenu>
            <Div css={Notificationmain.main}>
              <DropdownItem>
                <Div css={Notificationmain.item}>
                  <Div css={Notificationmain.notificationtext}>
                    <Span css={Notificationmain.span}>title</Span>
                    <Span css={Notificationmain.lastchild}>date </Span>
                  </Div>
                  <PayButton>Pay Dues &amp; Late Fees</PayButton>
                </Div>
              </DropdownItem>

              <DropdownItem>
                <StyledA className="click-link"  href="#"   target="_blank" css={Notificationmain.unreadedblock}
                >
                  <Span css={Notificationmain.unreaded}>
                    2 More Unread Notifications
                  </Span>
                </StyledA>
              </DropdownItem>
            </Div>
          </DropdownMenu>
        </Dropdown>
      </Headerinfo>
    );
  }
}

export default Notification;
