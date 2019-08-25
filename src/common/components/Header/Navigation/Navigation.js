import React, { Component } from "react";
import { Nav, Col } from "reactstrap";
import { StyledRow, StyledNavItem, StyledNavLink, Navigationsection, NavbarCollapse } from "./Style";

class Navigation extends Component {
  render() {
    return (
      <Navigationsection>
        <StyledRow className="row">
          <Col lg={12}>
            <NavbarCollapse>
            <Nav>
              <StyledNavItem>
                <StyledNavLink className="active" href="#">
                  Dashboard
                </StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="#">Activities</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="#">Subscriptions</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="#">Events</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink href="#">More Actions</StyledNavLink>
              </StyledNavItem>
            </Nav>
          </NavbarCollapse>
          </Col>
        </StyledRow>
      </Navigationsection>
    );
  }
}

export default Navigation;
