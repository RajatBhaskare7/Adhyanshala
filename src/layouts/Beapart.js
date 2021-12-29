import React from "react";
import "assets/css/beapart.css";
// reactstrap components
import img1 from 'assets/img/landing/Beapart/login register-03.png';
import img2 from 'assets/img/landing/Beapart/login register-04.png';
import img3 from 'assets/img/landing/Beapart/login register-05.png';
import img4 from 'assets/img/landing/Beapart/login register-06.png';
import img5 from 'assets/img/landing/Beapart/login register-07.png';
import img6 from 'assets/img/landing/Beapart/login register-08.png';
import Login from './login_element.js';
class Home extends React.Component {
   state ={
        visibles:false,
        
    }
    visible = () =>{
        this.setState({
            visibles:!this.state.visibles
        })
       
        
    }
  render() {
  
    return (
      <>
       <div className="landing">
            <div className="ldiv-1"></div>
            <div className="ldiv-2"></div>
            <div className="ldiv-3">
                <img src={img1} alt="s" className="imgr limg1" />
                <img src={img2} alt="s" className="imgr limg2"/>
                <img src={img3}  alt="s" className="imgr limg3"/>
                <img src={img4} alt="s" className="imgr limg4"/>
                <img src={img5}  alt="s" className="imgr limg5"/>
                <img src={img6} alt="s" className="imgr limg6"/>              
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
      </>
    );
  }
}

export default Home;
