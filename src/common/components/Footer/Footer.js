import React , { Component } from 'react';
import {  Row , Col } from 'reactstrap';
import Powered from '../../../assets/images/Powered-by-Scitent.png';
import {Footer, FooterBlock} from './Style';
import {  ContainerFluid  } from  '../../../Global'

class MainFooter extends Component{

    constructor(props) {
        super()
      }


    render()
    {
        return(
              <Footer>
                        <ContainerFluid className="container-fluid">
                            <Row>
                                <Col lg={12}>
                                    <FooterBlock>
                                        <div className="copyright">
                                            <span>© 2019 American Board of Neurological Surgery.</span>
                                        </div>
                                        <div className="Poweredby">
                                            <img src={Powered} alt="logo"/>
                                        </div>               
                                    </FooterBlock>
                                </Col>                                
                            </Row>
                        </ContainerFluid>                            
                    </Footer>
         )
    }
    
}

export default MainFooter;