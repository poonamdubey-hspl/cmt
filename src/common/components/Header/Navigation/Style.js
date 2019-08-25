import styled from "styled-components";
import { Row, NavItem, NavLink } from "reactstrap";

export const Navigationsection = styled.div`height: 50px;
`;

export const StyledRow = styled(Row)`
  background: #1a4b62; 
  align-items: center;
  height: 100%; 
  && :hover {
    color: #80d7ff !important;
  }
  && :active {
    color: #80d7ff;
    background: #80d7ff;
  }
`;


export const StyledNavItem = styled(NavItem)`margin: 0 20px;`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: #fff;
  text-transform: uppercase;
  &&.active{    color: #80D7FF;
    &&:after{
      background: #80D7FF;
    }
  }
  &&:after{
    content: '';
    position: absolute;
    height: 4px;
    width: 80%;
    left: 0;
    right: 0;
    bottom: -5px;
    margin: 0 auto;
    background: #1A4B62;}
`;

export const NavbarCollapse = styled.div`
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center
`