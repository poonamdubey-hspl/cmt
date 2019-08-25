import styled from "styled-components"
import {Progress} from "reactstrap"
import '../../../images/down-arrow.svg'

export const CollapesBlock = styled.div`
    
    @media (max-width: 768px) {
        padding: 0 5px;
     }
`
export const ActivityTitle = styled.button`
    display: flex;
    width: 100%;
    min-height: 67px;
    background: #f8fafc !important;
    border: 1px solid #D3D6DA !important;
    color: #111 !important;
    margin-top: 20px;
    align-items: center;
    margin-bottom: -4px;
    border-radius: 5px;   
    padding: 0 15px;
    position: relative;
    && img{
    position: absolute;
    right: 15px;
    top: 50%;
    bottom: 0;
    transform: translateY(-50%);
    }
    @media (max-width: 768px) {
     flex-direction: column;
     align-items: flex-start;
     padding: 10px;
     }
`

export const CollapesText = styled.div`
flex: 1 1;
display: flex;
flex-direction: column;
align-items: flex-start;`

export const Text = styled.span`
font-size: 13px;
color: #777777;
@media (max-width: 768px) {
    font-size: 12px;
     }`

export const Heading = styled.span`
font-size: 16px;
font-weight: 600;
@media (max-width: 768px) {
    font-size: 14px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 20px;
     }`

export const StyledProgress = styled(Progress)`
width: 180px;
height: 6px;
margin-bottom: 10px;
&& .progress-bar{
    background-color: #35B1DD;
}
`
export const TabMain = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #eee;
padding: 20px 0;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
}
&&:last-child{
    border-bottom:0;
}
`
export const TabContent = styled.div`
color:#111;
display: flex;
flex-direction: column;
`

export const TabHeading = styled.span`
color: #7E7E7E;
font-size: 16px;
text-transform: uppercase;`

export const TabText = styled.span`
    color:#111;
    font-size:13px;
    padding: 20px 0;`

export const BtnPrimary = styled.button`
    background: #1A4B62;
    font-size: 12px;
    padding: 6px 12px;
    display: flex;
    color:#fff;
    width:80px;
    border-radius:5px;
    justify-content: center;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }`

export const GreyBtn = styled.span`
        border: 1px solid #828282;
        border-radius: 15px;
        font-size: 12px;
        color: #828282;
        padding: 2px 5px;
        text-align: center;`
    
    export const DueDate = styled.span`
    font-size: 12px;
    color: #111111;
    margin-top: 10px;`

    export const GreenBtn = styled.span`
        border: 1px solid #5BC562;
        border-radius: 15px;
        font-size: 12px;
        color: #5BC562;
        padding: 2px 5px;
        text-align: center;`
        
        export const RedBtn = styled.span`
        border: 1px solid #FD6969;
        border-radius: 15px;
        font-size: 12px;
        color: #FD6969;
        padding: 2px 5px;
        text-align: center;`