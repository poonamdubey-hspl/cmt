import styled from 'styled-components';


export const UpcomingEvent = styled.div`
        height: 400px;
        overflow: hidden;
        overflow-y: auto;
        &&  .card {
            border: 0;
            position: relative;
   
    }
    && .card :after {
        content: '';
        position: absolute;
        height: 1px;
        width: 95%;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 0;
        background: #E4E9F0;
    }
        && .ue-date {
        font-size: 14px;
        color: #111111;
        font-weight: 600;
        display: block;
        margin-bottom: 15px;
    }
     &&  .card-title {
        font-size: 13px;
        font-weight: 600;
    }
    && .card-text {
    display: flex;
    justify-content: space-between;
}
&& i {
    margin-right: 10px;
}
`
