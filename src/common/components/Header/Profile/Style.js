import styled from "styled-components";
import { DropdownToggle } from "reactstrap";

const element = ele => styled(ele)`${props => props.css || ""};`;

export const StyledDropdownToggle = styled(DropdownToggle)`
  && {
    background: #ffffff !important;
    color: #000 !important;
    border: none;
    line-height: 60px;
  }
`;

export const Span = styled.span`padding-right: 10px;`;
