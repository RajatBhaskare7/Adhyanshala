import React from "react";
// reactstrap components
import SwipeableViews from 'react-swipeable-views';
import img1 from 'assets/img/landing/home/Landing-3.png';
import img2 from 'assets/img/landing/home/Landing-4.png';
import img3 from 'assets/img/landing/home/Landing-5.png';
import img4 from 'assets/img/landing/home/Landing-6.png';
import img5 from 'assets/img/landing/home/Landing-7.png';
import img6 from 'assets/img/landing/home/Landing-8.png';
import img7 from 'assets/img/landing/home/Landing-9.png';
import img8 from 'assets/img/landing/home/Landing-10.png';
import img9 from 'assets/img/landing/home/Landing-11.png';
import img10 from 'assets/img/landing/home/Landing-12.png';
import bg from 'assets/img/landing/home/adhyanshala-01.png';
import about_img1 from 'assets/img/landing/about/About_Landing-08.png';
import about_img2 from 'assets/img/landing/about/About_Landing-09.png';
import about_img3 from 'assets/img/landing/about/About_Landing-10.png';
import about_img4 from 'assets/img/landing/about/About_Landing-11.png';
import about_img5 from 'assets/img/landing/about/About_Landing-12.png';
import about_img6 from 'assets/img/landing/about/About_Landing-14.png';
import about_img7 from 'assets/img/landing/about/About_Landing-15.png';
import skill_img1 from 'assets/img/landing/skill/skill development-03.png';
import skill_img2 from 'assets/img/landing/skill/skill development-04.png';
import skill_img3 from 'assets/img/landing/skill/skill development-05.png';
import skill_img4 from 'assets/img/landing/skill/skill development-06.png';
import skill_img5 from 'assets/img/landing/skill/skill development-07.png';
import skill_img6 from 'assets/img/landing/skill/skill development-08.png';
import skill_img7 from 'assets/img/landing/skill/skill development-09.png';
import be_img1 from 'assets/img/landing/Beapart/login register-03.png';
import be_img2 from 'assets/img/landing/Beapart/login register-04.png';
import be_img3 from 'assets/img/landing/Beapart/login register-05.png';
import be_img4 from 'assets/img/landing/Beapart/login register-06.png';
import be_img5 from 'assets/img/landing/Beapart/login register-07.png';
import be_img6 from 'assets/img/landing/Beapart/login register-08.png';
import donate_img1 from 'assets/img/landing/donate/donate-03.png';
import donate_img2 from 'assets/img/landing/donate/donate-04.png';
import donate_img3 from 'assets/img/landing/donate/donate-05.png';
import donate_img4 from 'assets/img/landing/donate/donate-06.png';
import donate_img5 from 'assets/img/landing/donate/donate-07.png';
import c_img1 from "assets/img/landing/contact/contact-03.png"
import c_img2 from "assets/img/landing/contact/contact-04.png"
import c_img3 from "assets/img/landing/contact/contact-05.png"
import Donates from './donate_elements.js';
import Skills from './skill_elements.js';
import Contacts from './contact_elements.js';
import Login from './login_element.js';

import Abouts from "./about_elements.js";
import Homesub from "./home_elements.js";

import 'assets/css/landing.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import SwipeableRoutes from "react-swipeable-routes";

class Landing extends React.Component {
    constructor(props){
        super(props)
       
        this.state = {
            scrollTop: 0,
            index:0,
        }
    }
   state ={
        visibles:false,
        visibleabout:false,
        style:'start'
        

    }
    visible = () =>{
      
       
        this.setState({
            visibles:!this.state.visibles,
            style:'starty'
        });
             
    };
    
    
     handleChangeIndex (index, fromIndex) {
    alert('handleChangeIndex Fired with:', index)
    this.setState({
      index: index+1
    })
  }
   
  render() {
 
    return (
      <>
    
    
     <SwipeableViews  disabled={this.state.visibles} enableMouseEvents>
      <div onSwitching= {() => this.handleChangeIndex()}> 
         <div className="landing" >
            <div className="hdiv-1"></div>

            <div className="hdiv-2"></div > 
                      <div className="hdiv-3">
                <img src={img1}  className="himg1 imgr" alt="Img"/>
                <img src={img2} className="himg2 imgr" alt="Img"/>
                <img src={img3}className="himg3 imgr" alt="Img"/>
                <img src={img4} className="himg4 imgr" alt="Img"/>
                <img src={img5} className="himg5 imgr" alt="Img"/>
                <img src={img6} className="himg6 imgr" alt="Img"/>
                <img src={img7} className="himg7 imgr" alt="Img"/>
                <img src={img8} className="himg8 imgr" alt="Img"/>
                <img src={img9} className="himg9 imgr" alt="Img"/>
                <img src={img10} className="himg10 imgr" alt="Img"/>
            </div>
            <div className="hdiv-4">
                <div className="content-1">
                    <div>
                    <h2 className="wlc1">Welcome to</h2>
                    <h1 className="wlc2">ADHYANSHALA</h1>
                    </div>
                
                    <img src={bg} className="logo" alt="img"/>
                    
                    <div>
                        <p className="wlc3 mt-3">
                        Bridging the gap between 
                        <br/>
                        education and profession
                        </p>
                
    <button  className="btn btn-primary " onClick={this.visible}>
     Learn More
    </button>


                    </div>
                </div>
            </div>
            </div>
            {this.state.visibles===true && <Homesub/>}
      </div>  
      <div  >
         <div className="landing">
        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3">
          <img src={about_img1} alt="s" className="simgr img1" />
                <img src={about_img2} alt="s" className="imgr img2"/>
                <img src={about_img3}  alt="s" className="simgr img3"/>
                <img src={about_img4} alt="s" className="simgr img4"/>
                <img src={about_img5}  alt="s" className="simgr img5"/>
                <img src={about_img6} alt="s" className="simgr img6"/>
                <img src={about_img7} alt="s" className="simgr img7"/> 
        </div>
        <div className="div-4">
            <h1 className="about_heading"><b>About</b></h1>
            
        </div>
        <div className="sdiv-3 buttons buttonsa">
              <button className="btn btn-primary mt-7" onClick={this.visible}>
                        Learn More
                      </button>
            </div>
    </div>
    {this.state.visibles===true &&  <Abouts/>}
      </div>
       

      <div  style={{marginLeft:'-10px'}}>
        <div className="landing">
            <div className="sdiv-1"></div>
            <div className="sdiv-2"></div>
            <div className="sdiv-3">
                <img src={skill_img1} alt="s" className="simgr simg1" />
                <img src={skill_img2} alt="s" className="simgr simg2"/>
                <img src={skill_img3}  alt="s" className="simgr simg3"/>
                <img src={skill_img4} alt="s" className="simgr simg4"/>
                <img src={skill_img5}  alt="s" className="simgr simg5"/>
                <img src={skill_img6} alt="s" className="simgr simg6"/>
                <img src={skill_img7} alt="s" className="simgr simg7"/>               
            </div>
            <div className="sdiv-4">
               <h1 className="skills_heading"><b>Skill Development</b></h1>
              
            </div>
            <div className="sdiv-3 buttons">
              <button className="btn btn-primary mt-5" onClick={this.visible}>
                Learn More
                </button>
            </div>

        </div>
        {this.state.visibles===true && <Skills/>}
      </div>
      <div>
        <div className="landing">
            <div className="ldiv-1"></div>
            <div className="ldiv-2"></div>
            <div className="ldiv-3">
                <img src={be_img1} alt="s" className="imgr limg1" />
                <img src={be_img2} alt="s" className="imgr limg2"/>
                <img src={be_img3}  alt="s" className="imgr limg3"/>
                <img src={be_img4} alt="s" className="imgr limg4"/>
                <img src={be_img5}  alt="s" className="imgr limg5"/>
                <img src={be_img6} alt="s" className="imgr limg6"/>              
            </div>
            <div className="ldiv-4">
               <h1 className="be_heading"><b>Be A Part</b></h1>
               
            </div>
            <div className="sdiv-3 buttons">
              <button className="btn btn-primary mt-5" onClick={this.visible}>
                        Learn More
                      </button>
            </div>
        </div>
         {this.state.visibles===true && <Login/>}
      </div>
      <div>
        <div className="landing">
            <div className="ddiv-1"></div>
            <div className="ddiv-2"></div>
            <div className="ddiv-3">
                <img src={donate_img1} className="dimgr dimg1" alt="img1"/>
                <img src={donate_img2} className="dimgr dimg2" alt="img2" />
                <img src={donate_img3} className="dimgr dimg3" alt="img2" />
                <img src={donate_img4} className="dimgr dimg4" alt="img2" />
                <img src={donate_img5} className="dimgr dimg5" alt="img2" />

                  
            </div>
            <div className="ddiv-4">
               <h1 className="heading"><b>Donate</b></h1>
             
            </div>
            <div className="sdiv-3 buttons">
              <button className="btn btn-primary mt-5" onClick={this.visible}>
                        Learn More
                      </button>
            </div>
        </div>
        {this.state.visibles===true && <Donates/>}
      </div>
      <div>
        <div className="landing">
          <div className="cdiv-1"></div>
          <div className="cdiv-2"></div>
          <div className="cdiv-3">
            <img src={c_img1} className="imgr cimg1" alt="s" />
            <img src={c_img2} className="imgr cimg2" alt="s" />
            <img src={c_img3} className="imgr cimg3" alt="s" />
          </div>
          <div className="cdiv-4">
            <h1 className="heading"><b>Contact</b></h1>
          </div>
          <div className="sdiv-3 buttons">
              <button className="btn btn-primary mt-5" onClick={this.visible}>
                Learn More
                </button>
          </div>
        </div>
        {this.state.visibles === true && <Contacts />}
      </div>
    </SwipeableViews>

      </>
    );
  }
}

export default Landing;
