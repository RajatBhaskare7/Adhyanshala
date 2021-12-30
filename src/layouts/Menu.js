
import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";
import Contact from './Donate.js';
import 'assets/css/menu.css';
import border from 'assets/img/landing/donate/border.png';

import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'
function Home() {
    
  return (
    <>
    <nav className="menu">
  <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
  <label className="menu-open-button" for="menu-open">
    <span className="hamburger hamburger-1"></span>
    <span className="hamburger hamburger-2"></span>
    <span className="hamburger hamburger-3"></span>
  </label>
  
  <a href="#" className="menu-item"> <i className="fa fa-home"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-plus"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-heart"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-envelope"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-cog"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-ellipsis-h"></i> </a>
  
</nav>



    </>
  );
}
export default Home;
