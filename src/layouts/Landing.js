import React from "react";
// reactstrap components
import Home from './Home.js';
import Skills from './Skills.js';
import About from './About.js';
import Donate from './Donate.js';
import Beapart from './Beapart.js';
import Contact from "./Contact.js";
import Homesub from "./home_elements.js"
import 'assets/css/landing.css'
class Landing extends React.Component {
   state ={
        visibles:false,
        style:'start'

        
    }
    visible = () =>{
        this.setState({
            visibles:!this.state.visibles,
            style:'start'
        })
        
    }
  render() {
    
    return (
      <>
      <div className={this.state.style}>
      <div  className="main">
        <Home  className="main" />
      </div>
     <div className="main">
       <About  className="main"  />
       </div>
       <div className="main">
       <Skills  className="main" />
       </div>
       <div className="main">
        <Beapart/>
       </div>
       <div className="main">
        <Donate/>
      </div>
      <div className="main">
        <Contact/>
      </div>
       </div>
      </>
    );
  }
}

export default Landing;
