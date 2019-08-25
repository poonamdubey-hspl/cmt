import styled from "styled-components";
import { DropdownToggle } from "reactstrap";
import NotificationLogo from "./../../../../assets/images/home.svg";

const element = ele => styled(ele)`${props => props.css || ""};`;

export const Div = element("div");
export const Span = element("span");

export const notificationLogo = styled(NotificationLogo)`
  && {
    background: #000;
  }
`;

export const StyledDropdownToggle = styled(DropdownToggle)`
  && {
    background: #ffffff ;
    color: #111 ;
    border: none;
    line-height: 60px;
    box-shadow: none ;
  }&&:after{
    display:none;
  }
`;

export const Headerinfo = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;

export const Linktext = styled.span`
  text-align: center;
  padding-left: 5px;
`;

export const Notificationmain = {
  title: `
    background:#fff;
    `,
  main: `
    left: 1px !important;
    width: 100%;
    right: 0 !important;
    left: 0% !important;
    position: relative;
`,
  item: `
    width: 257px;
    margin:0 0 10px 0;
    padding:0 0 20px 0;
    border-bottom:1px solid #d8dee3
`,
  notificationtext: `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
`,
  span: `
  color: #111111;
  font-size: 12px;
  font-weight: 600
`,
  lastchild: `
color: #777777;
  font-weight: 500;
  font-size: 11px;
  margin-left:30px
`,
  unreadedblock: `
    display:block;
    
`,
  unreaded: `
    font-size: 11px;
    color: #3a6478;
    padding-left:20%;
    
`,
};

export const PayButton = styled.button`
  color: #d59500;
  border: 1px solid #d59500;
  background-color: #ffffff;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 0.25rem;
`;

export const NotificationButton = styled(DropdownToggle)`
  border: 1px solid #ff7200;
  background: #fff;
`;

export const StyledA = styled.a`
&&.click-link{
   color: #1A4B62;
    font-weight: 600;
}
`
