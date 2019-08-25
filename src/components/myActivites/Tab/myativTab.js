import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";
import MyactivCollapse from "../collapse/collapse";
import "./Style.css";
import {StyledNavItem, StyledTabheading, StyledTabContent} from './Style';
import { from } from "zen-observable";

const tabTitle = [
  { id: 1, name: "2019", status: "In progress", button: "$ Late" },
  { id: 2, name: "2018", status: "Incomplete", button: "$ Paid" },
  { id: 3, name: "2017", status: "Certified", button: "$ Paid" },
  { id: 4, name: "2016", status: "Certified", button: "$ Waived" }
];

const panelContent = [
  { id: 1, content: "sample content for tab 1" },
  { id: 2, content: "sample content for tab 2" },
  { id: 3, content: "sample content for tab 3" },
  { id: 4, content: "sample content for tab 4" }
];

class MyactivTab extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTabcal: "4",
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  bindTabs() {
    //return this.props.tabTitle.map
    return tabTitle.map(item => {
      return (
        <StyledNavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === item.id })}
            onClick={() => {
              this.toggle(item.id);
            }}
          > 
          <StyledTabheading>              
           <h4> {item.name}</h4> 
           <span className="tab-btn red">{item.button}</span>
          </StyledTabheading>
            <div> {item.status}</div>
          </NavLink>
        </StyledNavItem>
      );
    });
  }

  bindContent() {
    // return this.props.tabContent.map
    return panelContent.map(item => {
      return (
        <TabPane tabId={item.id}>
          <Row>
            <Col sm="12">
              <MyactivCollapse />
            </Col>
          </Row>
        </TabPane>
      );
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>{this.bindTabs()}</Nav>
        <StyledTabContent activeTab={this.state.activeTab}>
          {this.bindContent()}
        </StyledTabContent>
      </div>
    );
  }
}

export default MyactivTab;
