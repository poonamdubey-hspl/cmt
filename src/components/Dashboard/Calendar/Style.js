import styled from 'styled-components';
import {Card , CardTitle , CardText, NavItem, TabContent} from "reactstrap";

export const StyledCard = styled(Card)`
border: none;
padding: 10px 25px; 
flex: 1 1 auto; 
padding: 1.25rem;
`
export const StyledCardTitle = styled(CardTitle)`
   margin-bottom: 5px;
`
export const StyledCardText = styled(CardText)`
font-size: 12px;
color: #777777;
padding-bottom: 10px;
border-bottom: 1px solid #eee;
`
export const Span = styled.span`
font-size: 16px;
font-weight: 600;
color: #111111;
margin-bottom: 10px;
`
export const CalendarBlock =styled.div`
       background: #fff;
    box-shadow: 0px 0px 5px -1px rgba(136, 136, 136, 0.46);
    && .nav-tabs{
      border-bottom: none;
      background: #eee;
    }
`
export const StyledNavItem = styled(NavItem)`
    width: 50%;
    height: 45px;
    && a{
      border: none;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    height: 100%;    
    border:none !important;
    }
`

export const StyledTabContent =styled(TabContent)`
    background: #fff;
    padding: 10px;
    height: 100%;
    padding-bottom: 30px;
`