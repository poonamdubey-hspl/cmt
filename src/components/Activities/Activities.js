import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  NavItem,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col  
} from "reactstrap";
import classnames from "classnames";
import Inprogress from "./Inprogress/Inprogress";
import {  Wrapper, Title, StyledNav, StyledNavLink, DashboardSlider} from "./Style";
import activities from "../../assets/images/activities.svg";
class Activities extends Component {
  constructor(props) {
    super(props);
    // this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    //this.dropdowntoggle = this.dropdowntoggle.bind(this);
    //this.Notificationtoggle = this.Notificationtoggle.bind(this);
    //this.profiletoggle = this.profiletoggle.bind(this);
    this.state = {
      dropdownOpen: false,
      NotifdropdownOpen: false,
      profdropdownOpen: false,
      collapsed: true,
      activeTabcal: "4",
      activeTab: "1",
      view: "month",
      myEvents: [],
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

  render() {
    const { classes } = this.props;

    return (
      <Wrapper>
        <div>
          <Title>
            <span>
              <img src={activities} alt="activities" />
            </span>
            Activities
          </Title>

          <StyledNav className="nav-tabs">
            <NavItem>
              <StyledNavLink
                className={classnames({
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                In Progress
              </StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink
                className={classnames({
                  active: this.state.activeTab === "2"
                })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Not Started
              </StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink
                className={classnames({
                  active: this.state.activeTab === "3"
                })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Completed
              </StyledNavLink>
            </NavItem>

          </StyledNav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <DashboardSlider>
                    <Inprogress />
                  </DashboardSlider>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <div className="md-switching-view-cont" />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Wrapper>
    );
  }
}

export default Activities;
