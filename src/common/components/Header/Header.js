import React, { Component } from "react";
import {
  Row,
  Col,
} from "reactstrap";

import {ContainerFluid} from "../../../Global";
import FAQ from "./Faq/Faq";
import Notifications from "./Notification/Notification";
import Profile from "./Profile/Profile";
import Navigation from "./Navigation/Navigation";
import {
  Headerlogolink,
  Logoblock,
  Headerinfo,
  Styledheader
} from "./Style";
import logo from "../../../assets/images/logo.svg";

class Header extends Component {
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
      <Styledheader>
     <ContainerFluid className="container-fluid">
        <styledRow className="header-row row">
          <Col lg={12} sm={12} >
            <Headerlogolink>
              <Logoblock>
                <a href="#">
                  <img alt="logo" src={logo} />
                </a>
              </Logoblock>
              <Headerinfo>
                <FAQ />
                <Notifications />
                <Profile />
              </Headerinfo>
            </Headerlogolink>           
          </Col>
        </styledRow>
        <Navigation />
        </ContainerFluid>
        </Styledheader>
    );
  }
}

export default Header;
