import styled from "styled-components"
import {Modal} from 'reactstrap'
import { from } from "zen-observable";
export const Div = styled.div`
  background: #f2f4f6;
  padding: 5px;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 20px;
`;
export const Span = styled.span`font-weight: 600;`;
export const StyledModal = styled.div`

`;

export const StyledModal1 = styled(Modal)`
&& .modal-content{
   width:800px!important;
   height:550px;
   background:#000;
}
`