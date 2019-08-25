import styled from "styled-components"
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    &.body-block {
      @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Notable', sans-serif;
    background:#000;
    }    
  }
`
export const MainBlock = styled.div`
flex: 1 1;
margin-bottom: 50px;
`
export const ContainerFluid = styled.div`
height: 100%;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const a = styled.a`
    text-decoration: none;
    color: #111;
    &&:hover{
        text-decoration: none;
        color: #111;
    }
    &&.click-link {
    color: #1A4B62;
    font-weight: 600;
  }`
  export const button = styled.button`
    border: none;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    &&:hover{
        text-decoration: none;
        color: #111;
    }
    &&:focus {
    outline: none !important;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    outline: none;
  }`
 export const TextLable = styled.span`
    color: #FF7600;
    font-size: 12px;
 `

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
  font-weight:700;
`;


  
  
  

 