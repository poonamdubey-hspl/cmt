import React , { Component } from 'react';
import { Breadcrumb, BreadcrumbItem   } from 'reactstrap';
import './Style.css';
import Home from '../../../assets/images/home.svg';

class BreadcrumbBlock extends Component{

    constructor(props) {
        super(props);
      }     
    render()
    {
        return(
          <Breadcrumb>
          <BreadcrumbItem><a href="#"><img src={Home}/></a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Activities</a></BreadcrumbItem>
          </Breadcrumb> 
          )
    }
    
}

export default BreadcrumbBlock;