import React from "react";
import "assets/css/skills.css";
// reactstrap components
import img1 from 'assets/img/landing/skill/skill development-03.png';
import img2 from 'assets/img/landing/skill/skill development-04.png';
import img3 from 'assets/img/landing/skill/skill development-05.png';
import img4 from 'assets/img/landing/skill/skill development-06.png';
import img5 from 'assets/img/landing/skill/skill development-07.png';
import img6 from 'assets/img/landing/skill/skill development-08.png';
import img7 from 'assets/img/landing/skill/skill development-09.png';
import Skills from './skill_elements.js'
import Menu from './Menu.js';
import Footer from './footer.js';
class Home extends React.Component {
   state ={
        visibles:false,
        
    }
    visible = () =>{
        this.setState({
            visibles:!this.state.visibles
        });
        if(this.state.visibles==true){
          this.props.history.push("/");
           
          
        }
        else{
          this.props.history.push("/");
         };
        
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
  render() {
  
    return (
      <>
      <Menu/>

       <div className="landing" className="hero" >
            <div className="sdiv-1"></div>
            <div className="sdiv-2"></div>
            <div className="sdiv-3">
                <img src={img1} alt="s" className="simgr simg1" />
                <img src={img2} alt="s" className="simgr simg2"/>
                <img src={img3}  alt="s" className="simgr simg3"/>
                <img src={img4} alt="s" className="simgr simg4"/>
                <img src={img5}  alt="s" className="simgr simg5"/>
                <img src={img6} alt="s" className="simgr simg6"/>
                <img src={img7} alt="s" className="simgr simg7"/>               
            </div>
            <div className="sdiv-4">
               <h1 className="skills_heading"><b>Skill Development</b></h1>
              
            </div>
            <div className="sdiv-3 buttons">
            
            </div>

        </div>
        {this.state.visibles===false && <Skills/>}
        <Footer/>
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

export default Home;
