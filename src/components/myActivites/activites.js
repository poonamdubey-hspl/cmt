import React , { Component } from 'react';
import {  Row, Col } from 'reactstrap';
import Tab from './Tab/myativTab';
import Header from "../../common/components/Header/Header";
import Footer from '../../common/components/Footer/Footer';
import BreadcrumbAll from '../../common/components/Breadcrumb/Breadcrumb';
import {Styledmyactivtab} from './Style'
import{MainBlock, ContainerFluid, Wrapper, TextLable, Greetingspan, Usernamespan} from '../../Global'
import { from } from 'zen-observable';

class Dashboard extends Component{

    constructor(props) {
        super(props);
      }

    render()
    {
        return(

<Wrapper>
<MainBlock>
  <Header />
    <div className="container-block">
        <ContainerFluid className="container-fluid">
            <Row>
                <Col lg={12}>      
                <div className="Breadcrumb-block"> 
                    <BreadcrumbAll/>
                </div>                                                                       
                <Styledmyactivtab>      
                    <h3>My Activities</h3>  
                    <Tab/>    
               </Styledmyactivtab>
                </Col>
            </Row>
        </ContainerFluid>
    </div>
   </MainBlock>  
   <Footer/>             
 </Wrapper>
         )
    }
    
}

export default Dashboard;
