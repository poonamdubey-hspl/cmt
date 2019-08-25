import styled from "styled-components";
import { Card, CardBody, CardTitle } from "reactstrap";
import Carousel from "react-multi-carousel";

const element = ele => styled(ele)`${props => props.css || ""};`;

export const Div = element("div");
export const Span = element("span");
export const StyledCard = styled(Card)`
  && {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
    && .card-subtitle {
      font-size: 14px;
      font-weight: 600;
      margin: 0 5px 15px;
      height: 42px;
      overflow: hidden;
    }
    && .card-text {
        position: relative;
        display: flex;
        align-items: center;
    }
    && .progress {
    height: 6px;
    width: 70%;
    margin-left: 10px;
  }
  && .Progress-pre {
    position: absolute;
    right: 0;
    top: -9px;
    font-size: 16px;
    font-weight: 600;
}
`;
export const cardTitle = styled(CardTitle)`
 
`;
export const StyleCardBody = styled(CardBody)`
  && {
    padding: 20px 15px;
    text-align: center;
    flex: 1 1 auto;
  }
  &&  span {
    font-size: 12px;
  }
`;

export const StyledCarousal = styled(Carousel)`
    position: static !important;
  && container && button {
    transition: none 0s ease 0s;
    overflow: unset;
    transform: translate3d(-572px, 0px, 0px);
    left: calc(4% + 1px);
  }
  && container && button :before {
    font-size: 20px;
    color: #fff;
    display: block;
    font-family: revicons;
    text-align: center;
    z-index: 2;
    position: relative;
  }
  && .react-multi-carousel-item {
    padding: 0 12px;
  }
  && .react-multiple-carousel__arrow {
    background: none;
  }
  && .react-multiple-carousel__arrow:before {
    color: #D2D2D2;
  }
  && .react-multiple-carousel__arrow--left {
    left: calc(0px + 0px);
  }
  && .react-multiple-carousel__arrow--right {
      right: calc(0px + 0px);
  }
  && button:focus{
    outline: none !important;
  }
  && button.btn-primary.btn.btn-secondary {
      background: #1A4B62;
      font-size: 12px;
      padding: 6px 12px;
      display: flex;
      margin: 10px auto;
  }
  && .react-multi-carousel-dot-list {
      bottom: -35px;
  }

  &&  .react-multi-carousel-dot button {
      background: #DFE1E2;
      border: none;
  }
  && .react-multi-carousel-dot--active button {
      background: #80D7FF;
  }
`;
