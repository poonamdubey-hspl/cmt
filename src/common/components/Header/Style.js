import styled from "styled-components";
import { Col, Row } from "reactstrap";

export const Styledheader = styled.header`
  background-color:#fff;
`
export const Headerlogolink = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const Logoblock = styled.section`
  height: 70px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const Headerinfo = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const MainBlock = styled.div`
  flex: 1 1;
  margin-bottom: 50px;
`;

export const styledCol = styled(Col)`
&&{
  padding-right:0px!important;
  padding-left:0px!important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end; 
    float:right 
  
  }
`;

export const styledRow = styled(Row)`
&&.header-row{
  align-items: center;
    height: 100%;
}`
