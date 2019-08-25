import styled from "styled-components"
import {NavItem, TabPane, TabContent} from 'reactstrap'
import { from } from "zen-observable";

export const StyledNavItem =styled(NavItem)`
        min-width: 182px;
        height: 68px;
        && .nav-link{
            height: 100%;
            padding-top: 15px;
            padding-left: 25px;
            border-radius: 0;
            border: none;
            cursor: pointer;
        }
        &&  h4 {
        font-size: 18px;
        font-weight: 600;
        }

        
`
export const StyledTabheading = styled('div')`
    display: flex;
    justify-content: space-between;
    && .tab-btn{
        background: #fff;
        padding: 0 8px;
        display: flex;
        align-items: center;
        border: 1px solid #777777;
        color: #777777;
        border-radius: 20px;
        height: 20px;
    }
    && .red{
        color:#FD5B5B;
        border-color:#FD5B5B;
    }
    && .green{
        color:#5BC562;
        border-color:#5BC562;
    }
`
export const StyledTabContent = styled(TabContent)`
  background: #fff;
  padding: 10px;
  height: 100%;
  padding-bottom: 30px;
`
export const Styledmyactivtab = styled("div")`
   && h3{
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #111;
   }
`
