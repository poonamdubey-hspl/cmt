import styled from "styled-components";

const element = ele => styled(ele)`${props => props.css || ""};`;

export const Div = element("div");

export const Greetingspan = styled.h1`
font-size: 22PX;
margin-top: 40px;
margin-bottom: 20px;
&& span{
  font-size: 22PX;
}
`;

export const Usernamespan = styled.span`
  font-size: 22px;
`;

export const Pendingtaskspan = styled.span`
  color: #ff7600;
  font-size: 12px;
`;

export const Cardblock = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 10px;
  box-shadow: 0px 0px 5px -1px rgba(136, 136, 136, 0.46);
  padding: 20px 9px;
`;

export const NotificationUL = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex: 100 1;
`;

export const NotificationLI = styled.li`
  list-style: none;
  padding: 0 20px;
  flex: 100 1;
  position: relative;
`;

export const ButtonDateBlock = styled.div`
  justify-content: space-between;
  display: flex;
  margin-right: 20px;
  margin-top: 20px;
  && :after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background: #eee;
    right: 0;
    top: 0;
  }
`;

export const NotificationSpan = styled.span`
    font-size: 14px;
    width: 223px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
`;

export const Paybutton = styled.button`
  border: 1px solid #d59500;
  padding: 2px 5px;
  font-size: 12px;
  color: #d59500;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Datespan = styled.span`
  color: #777777;
  font-size: 12px;
`;

export const CardNotification = styled.div`
  text-align: right;
  font-size: 12px;  
  margin-top: 10px;
`;

export const Notification = {
  margin: `margin-top:40px; margin-bottom:20px`
};

export const A = styled.a`
color: #1a4b62;
text-decoration: none;
font-weight: 600;
&&:hover{
  text-decoration: none;
}
`