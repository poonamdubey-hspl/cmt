import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Header from "../../common/components/Header/Header";
// import Notification from "../Notifications-Dashboard/Notifications";
import Activities from "../Activities/Activities";
import Calendar from "../Calendar/Calendar";
import Footer from '../../common/components/Footer/Footer'
import Notifications from "./Notifications-Dashboard/Notifications"
import{MainBlock, ContainerFluid, Wrapper, TextLable, Greetingspan, Usernamespan} from '../../Global'
import { from } from "zen-observable";
class Dashboard extends Component {
  render() {
    let Users = 
      {
        id:1,
        firstName: "Jone",
        lastName:"Crowley",
        notificatios:[
          {
            id:1,
            title:"2019 Active Members Dues",
            date:"Jul 18, 2019"
          },
          {
            id:2,
            title:"2019 Active Members Dues",
            date:"Jul 19, 2019"
          },
          {
            id:3,
            title:"2020 Active Members Dues",
            date:"Jul 18, 2019"
          },
          {
            id:4,
            title:"2019 Active Members Dues",
            date:"Jul 18, 2019"
          },
          {
            id:5,
            title:"2019 Active Members Dues",
            date:"Jul 18, 2019"
          }
        ],
        profileImgUrl : "https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
      }
    ;
    return (
      <Wrapper>
        <MainBlock>
          <Header />
          <div className="container-block">             
              <ContainerFluid className="container-fluid">
              <Row>
               <Col lg={12}>
                  <Greetingspan>
                    <span>Welcome back,</span><Usernamespan> Dr. John Crowley!</Usernamespan>
                </Greetingspan>
                </Col>
            </Row>  
              <Row>
                <Col>
                   <TextLable>You have 2 pending tasks</TextLable>
                </Col>
              </Row>  
                <Row>
                  <Col lg={8}>
                  <Notifications />
                    <Activities />
                  </Col>
                  <Col lg={4}>
                    <Calendar />
                  </Col>
                </Row>            
              </ContainerFluid>
             </div>
      </MainBlock>
      <Footer/>
        </Wrapper>
    );
  }
}

export default Dashboard;
