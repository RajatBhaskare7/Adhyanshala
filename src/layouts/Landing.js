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
import Loader from './loader.js';
import Abouts from "./about_elements.js";
import Homesub from "./home_elements.js";
import Drift from "react-driftjs";
import 'assets/css/landing.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import SwipeableRoutes from "react-swipeable-routes";

class Landing extends React.Component {
    constructor(props){
        super(props)
       
        this.state = {
            scrollTop: 0,
            index:0,
            loading:true,
             text:"Explore",
        }
    }
   state ={
        visibles:false,
        visibleabout:false,
        style:'start',
        vision:'landing',
        avisibles:false,
        svisibles:false,
        lvisibles:false,
        dvisibles:false,
        cvisibles:false,
        loading:true,
 

        
    }
    visible = () =>{
      
       
        this.setState({
            visibles:!this.state.visibles,
            style:'starty',
            
        });
        if(this.state.visibles===true){
          this.props.history.push("/home");
          this.setState({text:'Explore'});
          
        }
        else{
          this.props.history.push("/home");
          this.setState({text:'Return to Menu'});
        }
      
        
             
    };
    avisible = () =>{
      
       
        this.setState({
            avisibles:!this.state.avisibles,
            visibles:!this.state.visibles,
            style:'starty',
            
        });
         if(this.state.avisibles===true){
          this.props.history.push("/");
           this.setState({text:'Explore'});
          
        }
        else{
          this.props.history.push("/about");
          this.setState({text:'Return to Menu'});

        }
                  
    };
    svisible = () =>{
      
       
        this.setState({
            svisibles:!this.state.svisibles,
            visibles:!this.state.visibles,
            style:'starty',
            
        });
         if(this.state.svisibles===true){
          this.props.history.push("/");
           this.setState({text:'Explore'});
          
        }
        else{
          this.props.history.push("/skills");
          this.setState({text:'Return to Menu'});
        }
                
    };
     lvisible = () =>{
      
       
        this.setState({
            lvisibles:!this.state.lvisibles,
            visibles:!this.state.visibles,
            style:'starty',
            
        });
         if(this.state.lvisibles===true){
          this.props.history.push("/");
           this.setState({text:'Explore'});
          
        }
        else{
          this.props.history.push("/beapart");
          this.setState({text:'Return to Menu'});
        }
                 
    };
     dvisible = () =>{
      
       
        this.setState({
            dvisibles:!this.state.dvisibles,
            visibles:!this.state.visibles,
            style:'starty',
            
        });

         if(this.state.dvisibles===true){
          this.props.history.push("/");
           this.setState({text:'Explore'});
          
        }
        else{
          this.props.history.push("/donate");
          this.setState({text:'Return to Menu'});
        }
                  
    };
     cvisible = () =>{
      
       
        this.setState({
            cvisibles:!this.state.cvisibles,
            visibles:!this.state.visibles,
            style:'starty',
            
        });
         if(this.state.cvisibles===true){
          this.props.history.push("/");
           this.setState({text:'Explore'});
          
        }
        else{
          this.props.history.push("/contact");
          this.setState({text:'Return to Menu'});
        }
                  
    };
     handleChangeIndex (index, fromIndex) {
    alert('handleChangeIndex Fired with:', index)
    this.setState({
      index: index+1
    })
  }
   

  render() {
    const {loading }=this.state;
    if(this.state.loading===true){
      setTimeout(()=>{
        this.setState({loading :false});
      },6);
    }
    return loading ?(
          <Loader/>
      ) : (
      <>
    
     
     <SwipeableViews className="hero"  disabled={this.state.visibles} enableMouseEvents>
      <div onSwitching= {() => this.handleChangeIndex()}> 
         <div className={(this.state.visibles===true ? 'landing2' :'landing')} >
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
                        <Drift
  appId="xxxxx"
  userId="1234"
  attributes={{ email: "user@example.com", company: "Acme Inc" }}
/>
  
          <button className="button-upload btn btn-primary m-1" onClick={this.visible}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.089"
    height="34.388"
    className="button-upload__logo"
    viewBox="0 0 36.089 34.388"
  >
    <g
      transform="translate(22.577) rotate(49)"
      className="button-upload__logo--complete"
    >
      <g
        transform="translate(5.976 28.664)"
        className="button-upload__logo--trails"
      >
        <path
          d="M153.97,738.46l1.692.055v6.115l-1.692-1.147"
          transform="translate(-153.97 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M337.1,738.46l-1.692.055v6.115l1.692-1.147"
          transform="translate(-328.367 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M243.98,738.46h1.692V747l-.846.939-.846-.971"
          transform="translate(-240.486 -738.46)"
          fill="#fafafa"
        />
      </g>
      <g className="button-upload__logo--rocket">
        <path
          d="M19.627,21.9l-2.95-2.95A28.11,28.11,0,0,0,10.3,0,28.1,28.1,0,0,0,3.923,18.952L.973,21.9s-1.454,4.092-.8,6.822l4.393-4.378q.074.358.155.721H5.7l.981.979h3.606l.017-.979.017.979h3.605l.979-.979h.979q.083-.363.155-.721l4.393,4.378C21.082,25.994,19.627,21.9,19.627,21.9Zm-9.3-2.65a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,10.323,19.252Z"
          transform="translate(-0.002 0)"
          fill="#fafafa"
        />
      </g>
    </g>
  </svg>
  <span className="button-upload__text">{this.state.text}  </span>
</button>

                    </div>
                </div>
                 <div className="swipe text-center" style={{color:'#000',float:'right',paddingTop:'-30px'}} >
<h2>Swipe for more<br/>
<i className="fa fa-hand-point-right text-center" ></i></h2>
</div>
            </div>  
            <Drift appId="xxxxx" />

            </div>
            {this.state.visibles===true && <Homesub/>}
      </div>  
      <div style={{overflow:'hidden'}}>
         <div className={(this.state.avisibles===true ? 'landing2' :'landing')}>
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
            <h1 className="about_title_heading">About</h1>
        </div>
        <div className="sdiv-3 buttons buttonsa">        
       <button className="button-upload about_button btn btn-primary mt-9" onClick={this.avisible}>
               <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.089"
    height="34.388"
    className="button-upload__logo"
    viewBox="0 0 36.089 34.388"
  >
    <g
      transform="translate(22.577) rotate(49)"
      className="button-upload__logo--complete">
      <g
        transform="translate(5.976 28.664)"
        className="button-upload__logo--trails"
      >
        <path
          d="M153.97,738.46l1.692.055v6.115l-1.692-1.147"
          transform="translate(-153.97 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M337.1,738.46l-1.692.055v6.115l1.692-1.147"
          transform="translate(-328.367 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M243.98,738.46h1.692V747l-.846.939-.846-.971"
          transform="translate(-240.486 -738.46)"
          fill="#fafafa"
        />
      </g>
      <g className="button-upload__logo--rocket">
        <path
          d="M19.627,21.9l-2.95-2.95A28.11,28.11,0,0,0,10.3,0,28.1,28.1,0,0,0,3.923,18.952L.973,21.9s-1.454,4.092-.8,6.822l4.393-4.378q.074.358.155.721H5.7l.981.979h3.606l.017-.979.017.979h3.605l.979-.979h.979q.083-.363.155-.721l4.393,4.378C21.082,25.994,19.627,21.9,19.627,21.9Zm-9.3-2.65a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,10.323,19.252Z"
          transform="translate(-0.002 0)"
          fill="#fafafa"
        />
      </g>
    </g>
  </svg>{this.state.text}
                </button>
            </div>
    </div>
    {this.state.avisibles===true &&  <Abouts/>}
      </div>
       

      <div  style={{marginLeft:'-10px'}}>
        <div className={(this.state.svisibles===true ? 'landing2' :'landing')}>
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
               <h1 className="skills_heading">Skill Development</h1>
              
            </div>
            <div className="sdiv-3 buttons " >
              <button className="button-upload skill_button btn btn-primary mt-7"  onClick={this.svisible}>
               <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.089"
    height="34.388"
    className="button-upload__logo"
    viewBox="0 0 36.089 34.388"
  >
    <g
      transform="translate(22.577) rotate(49)"
      className="button-upload__logo--complete"
    >
      <g
        transform="translate(5.976 28.664)"
        className="button-upload__logo--trails"
      >
        <path
          d="M153.97,738.46l1.692.055v6.115l-1.692-1.147"
          transform="translate(-153.97 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M337.1,738.46l-1.692.055v6.115l1.692-1.147"
          transform="translate(-328.367 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M243.98,738.46h1.692V747l-.846.939-.846-.971"
          transform="translate(-240.486 -738.46)"
          fill="#fafafa"
        />
      </g>
      <g className="button-upload__logo--rocket">
        <path
          d="M19.627,21.9l-2.95-2.95A28.11,28.11,0,0,0,10.3,0,28.1,28.1,0,0,0,3.923,18.952L.973,21.9s-1.454,4.092-.8,6.822l4.393-4.378q.074.358.155.721H5.7l.981.979h3.606l.017-.979.017.979h3.605l.979-.979h.979q.083-.363.155-.721l4.393,4.378C21.082,25.994,19.627,21.9,19.627,21.9Zm-9.3-2.65a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,10.323,19.252Z"
          transform="translate(-0.002 0)"
          fill="#fafafa"
        />
      </g>
    </g>
  </svg>{this.state.text}
                </button>
            </div>

        </div>
        {this.state.svisibles===true && <Skills/>}
      </div>
      <div>
        <div className={(this.state.lvisibles===true ? 'landing2' :'landing')}>
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
               <h1 className="be_heading beapart_heading ">Be A Part</h1>
               
            </div>
            <div className="sdiv-3 buttons">
              

                       <button className="button-upload be_button btn btn-primary mt-5" onClick={this.lvisible}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.089"
    height="34.388"
    className="button-upload__logo"
    viewBox="0 0 36.089 34.388"
  >
    <g
      transform="translate(22.577) rotate(49)"
      className="button-upload__logo--complete"
    >
      <g
        transform="translate(5.976 28.664)"
        className="button-upload__logo--trails"
      >
        <path
          d="M153.97,738.46l1.692.055v6.115l-1.692-1.147"
          transform="translate(-153.97 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M337.1,738.46l-1.692.055v6.115l1.692-1.147"
          transform="translate(-328.367 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M243.98,738.46h1.692V747l-.846.939-.846-.971"
          transform="translate(-240.486 -738.46)"
          fill="#fafafa"
        />
      </g>
      <g className="button-upload__logo--rocket">
        <path
          d="M19.627,21.9l-2.95-2.95A28.11,28.11,0,0,0,10.3,0,28.1,28.1,0,0,0,3.923,18.952L.973,21.9s-1.454,4.092-.8,6.822l4.393-4.378q.074.358.155.721H5.7l.981.979h3.606l.017-.979.017.979h3.605l.979-.979h.979q.083-.363.155-.721l4.393,4.378C21.082,25.994,19.627,21.9,19.627,21.9Zm-9.3-2.65a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,10.323,19.252Z"
          transform="translate(-0.002 0)"
          fill="#fafafa"
        />
      </g>
    </g>
  </svg>
  <span className="button-upload__text">{this.state.text} </span>
</button>
            </div>
        </div>
         {this.state.lvisibles===true && <Login/>}
      </div>
      <div>
        <div className={(this.state.dvisibles===true ? 'landing2' :'landing')}>
            <div className={(this.state.dvisibles===true ? 'ddiv-11' :'ddiv-1')}></div>
            <div className={(this.state.dvisibles===true ? 'ddiv-22' :'ddiv-2')}></div>
            <div className="ddiv-3">
                <img src={donate_img1} className="dimgr dimg1" alt="img1"/>
                <img src={donate_img2} className="dimgr dimg2" alt="img2" />
                <img src={donate_img3} className="dimgr dimg3" alt="img2" />
                <img src={donate_img4} className="dimgr dimg4" alt="img2" />
                <img src={donate_img5} className="dimgr dimg5" alt="img2" />

                  
            </div>
            <div className="ddiv-4">
               <h1 className="donate__heading" >Donate</h1>
             
            </div>
            <div className="sdiv-3 buttons">
              <button className="button-upload btn btn-primary mt-7" onClick={this.dvisible}>
               <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.089"
    height="34.388"
    className="button-upload__logo"
    viewBox="0 0 36.089 34.388"
  >
    <g
      transform="translate(22.577) rotate(49)"
      className="button-upload__logo--complete">
      <g
        transform="translate(5.976 28.664)"
        className="button-upload__logo--trails"
      >
        <path
          d="M153.97,738.46l1.692.055v6.115l-1.692-1.147"
          transform="translate(-153.97 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M337.1,738.46l-1.692.055v6.115l1.692-1.147"
          transform="translate(-328.367 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M243.98,738.46h1.692V747l-.846.939-.846-.971"
          transform="translate(-240.486 -738.46)"
          fill="#fafafa"
        />
      </g>
      <g className="button-upload__logo--rocket">
        <path
          d="M19.627,21.9l-2.95-2.95A28.11,28.11,0,0,0,10.3,0,28.1,28.1,0,0,0,3.923,18.952L.973,21.9s-1.454,4.092-.8,6.822l4.393-4.378q.074.358.155.721H5.7l.981.979h3.606l.017-.979.017.979h3.605l.979-.979h.979q.083-.363.155-.721l4.393,4.378C21.082,25.994,19.627,21.9,19.627,21.9Zm-9.3-2.65a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,10.323,19.252Z"
          transform="translate(-0.002 0)"
          fill="#fafafa"
        />
      </g>
    </g>
  </svg>{this.state.text}
                </button>
            </div>
        </div>
        {this.state.dvisibles===true && <Donates/>}
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
            <h1 className="headingc">Contact</h1>
          </div>
          <div className="sdiv-3 buttons">
                <button className="button-upload btn btn-primary mt-7"  onClick={this.cvisible}>
               <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.089"
    height="34.388"
    className="button-upload__logo"
    viewBox="0 0 36.089 34.388"
  >
    <g
      transform="translate(22.577) rotate(49)"
      className="button-upload__logo--complete">
      <g
        transform="translate(5.976 28.664)"
        className="button-upload__logo--trails"
      >
        <path
          d="M153.97,738.46l1.692.055v6.115l-1.692-1.147"
          transform="translate(-153.97 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M337.1,738.46l-1.692.055v6.115l1.692-1.147"
          transform="translate(-328.367 -738.46)"
          fill="#fafafa"
        />
        <path
          d="M243.98,738.46h1.692V747l-.846.939-.846-.971"
          transform="translate(-240.486 -738.46)"
          fill="#fafafa"
        />
      </g>
      <g className="button-upload__logo--rocket">
        <path
          d="M19.627,21.9l-2.95-2.95A28.11,28.11,0,0,0,10.3,0,28.1,28.1,0,0,0,3.923,18.952L.973,21.9s-1.454,4.092-.8,6.822l4.393-4.378q.074.358.155.721H5.7l.981.979h3.606l.017-.979.017.979h3.605l.979-.979h.979q.083-.363.155-.721l4.393,4.378C21.082,25.994,19.627,21.9,19.627,21.9Zm-9.3-2.65a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,10.323,19.252Z"
          transform="translate(-0.002 0)"
          fill="#fafafa"
        />
      </g>
    </g>
  </svg>{this.state.text}
                </button>


          </div>
        </div>
        {this.state.cvisibles === true && <Contacts />}
      </div>
      
    </SwipeableViews>

    <div className="landscape-view">
      <div className="phone">
</div>
<div className="message">
  Please rotate your device!
</div>
    </div>
   
      </>
    );
  }
}

export default Landing;