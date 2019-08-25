import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { StyledDropdownToggle, Span } from "./Style";

import profile from "../../../../assets/images/brandon.jpg";

class Profile extends Component {
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

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
    return (
      <div className="header-info">
        <Dropdown
          isOpen={this.state.profdropdownOpen}
          onClick={this.profiletoggle}
          className="profile-block"
        >
          <StyledDropdownToggle caret>
            <Span>Jone Crowley</Span>
            <img
              className="profile-img"
              alt="profile"
              src={profile}
              width="40px"
              height="40px"
            />
          </StyledDropdownToggle>
          <DropdownMenu>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default Profile;
