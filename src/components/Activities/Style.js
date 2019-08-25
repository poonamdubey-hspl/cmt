import styled from "styled-components";
import {Nav, NavLink} from 'reactstrap'
export const dasActivities = styled.div`margin-top: 200px;`;

export const Title = styled.h3`
    position: absolute;
    font-size: 18px;
    font-weight: 600;
    color: #111111;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`padding: 20px;`;

export const StyledNav = styled(Nav)`
    justify-content: flex-end;
    border-color: #CAD2DA;
    margin-bottom: 15px;
`;

export const navItem = styled.li`margin-bottom: -1px;`;

export const StyledNavLink = styled(NavLink)`
    background-color: transparent;
    border-color: transparent;
    position: relative;
    cursor: pointer;
    &&.active{
      color: #111111;
    font-weight: 600;    
    background-color: transparent;
    border-color: transparent; 
    &&:after{
      background: #111111;
    } 
    }
    &&:after{
      content: '';
    height: 4px;
    position: absolute;
    width: 80%;
    background: transparent;
    bottom: -2px;
    left: 0;
    border-radius: 8px;
    margin: 0 auto;
    right: 0;
    }
`;

export const DashboardSlider = styled.div`
    position: relative;
    padding: 0 40px;
`