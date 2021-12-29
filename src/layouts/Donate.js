import React from "react";
import img1 from 'assets/img/landing/donate/donate-03.png';
import img2 from 'assets/img/landing/donate/donate-04.png';
import img3 from 'assets/img/landing/donate/donate-05.png';
import img4 from 'assets/img/landing/donate/donate-06.png';
import img5 from 'assets/img/landing/donate/donate-07.png';
import Donates from './donate_elements.js';
import 'assets/css/donate.css';
// reactstrap components
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
            <div className="ddiv-1"></div>
            <div className="ddiv-2"></div>
            <div className="ddiv-3">
                <img src={img1} className="dimgr dimg1" alt="img1"/>
                <img src={img2} className="dimgr dimg2" alt="img2" />
                <img src={img3} className="dimgr dimg3" alt="img2" />
                <img src={img4} className="dimgr dimg4" alt="img2" />
                <img src={img5} className="dimgr dimg5" alt="img2" />

                  
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
        {this.state.visibles==true && <Donates/>}
      </>
    );
  }
}

export default Home;
