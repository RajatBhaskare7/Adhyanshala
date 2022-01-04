import React ,{Component} from "react";
import 'assets/css/style.css';
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
import Homesub from "./home_elements.js";
import bg from 'assets/img/landing/home/adhyanshala-01.png';
class Home extends Component {
  

    
  
  render() {
    
    return (
      <>
        <div className="landing">
            <div className="hdiv-1"></div>
            <div className="hdiv-2"></div>
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
                      <button className="btn btn-primary mt-3">
                        Learn More
                      </button>
                      

                    
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default Home;
