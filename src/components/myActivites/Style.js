import styled from "styled-components";
import { Progress } from "reactstrap";

const element = ele => styled(ele)`${props => props.css || ""};`;

export const Div = styled.div`
  background: #f2f4f6;
  padding: 5px;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 20px;
`;

export const Span = styled.span`font-weight: 600;`;

export const CollapesBlock = styled.div`padding: 0 15px;`;
export const ActivityTitle = styled.button`
  display: flex;
  width: 100%;
  min-height: 67px;
  background: #f8fafc !important;
  border: 1px solid #d3d6da !important;
  border: 1px solid #d3d6da !important;
  color: #111 !important;
  margin-top: 20px;
  align-items: center;
  margin-bottom: -4px;
  border-radius: 5px;
  padding: 0 15px;
`;

export const CollapesText = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.span`
  font-size: 13px;
  color: #777777;
`;

export const Heading = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledProgress = styled(Progress)`
  width: 180px;
  height: 6px;
  margin-bottom: 10px;
  && .progress-bar {
    background-color: #35b1dd;
  }
`;
export const TabMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  &&:last-child {
    border-bottom: 0;
  }
`;
export const TabContent = styled.div`
  color: #111;
  display: flex;
  flex-direction: column;
`;

export const TabHeading = styled.span`
  color: #7e7e7e;
  font-size: 16px;
  text-transform: uppercase;
`;

export const TabText = styled.span`
  color: #111;
  font-size: 13px;
  padding: 20px 0;
`;

export const BtnPrimary = styled.button`
  background: #1a4b62;
  font-size: 12px;
  padding: 6px 12px;
  display: flex;
  color: #fff;
  width: 80px;
  border-radius: 5px;
  justify-content: center;
`;

export const GreyBtn = styled.span`
  border: 1px solid #828282;
  border-radius: 15px;
  font-size: 12px;
  color: #828282;
  padding: 2px 5px;
  text-align: center;
`;

export const DueDate = styled.span`
  font-size: 12px;
  color: #111111;
  margin-top: 10px;
`;

export const GreenBtn = styled.span`
  border: 1px solid #5bc562;
  border-radius: 15px;
  font-size: 12px;
  color: #5bc562;
  padding: 2px 5px;
  text-align: center;
`;

export const RedBtn = styled.span`
  border: 1px solid #fd6969;
  border-radius: 15px;
  font-size: 12px;
  color: #fd6969;
  padding: 2px 5px;
  text-align: center;
`;

export const Styledmyactivtab = styled("div")`
   && h3{
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #111;
   }
`
