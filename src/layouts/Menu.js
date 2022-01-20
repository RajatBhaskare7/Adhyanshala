
import React from "react";

import { Link, hashHistory } from 'react-router-dom';
import Contact from './Donate.js';
import 'assets/css/menu.css';
import border from 'assets/img/landing/donate/border.png';
import About from './About.js';
import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'
class Landing extends React.Component {
  constructor(props){
    super(props);
  }
       
  render(){
    
  return (
    <>

    <nav className="menu hero">
  <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
  <label className="menu-open-button" for="menu-open">
    <span className="hamburger hamburger-1"></span>
    <span className="hamburger hamburger-2"></span>
    <span className="hamburger hamburger-3"></span>
  </label>
  
  <Link to="/" className="menu-item">  <i className="fa fa-bars"> </i> </Link>
  <Link to="/home"  className="menu-item"> <i  className="fa fa-home"></i> </Link>
  <Link to="/about" className="menu-item"> <i className="fa fa-tools"></i> </Link>
  
  <Link to="/beapart" className="menu-item"> <i className="fa fa-file-signature"></i> </Link>
  <Link to="/donate" className="menu-item"> <i className="fa fa-donate"></i> </Link>

  <Link to="/contact" className="menu-item"> <i className="fa fa-mail-bulk"></i> </Link>
 
 

 <Link to="/skills" className="menu-item"> <i className="fab fa-accusoft"></i> </Link>
</nav>



    </>
  );

};
}
export default Landing;
