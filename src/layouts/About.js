import React from "react";
// reactstrap components
import img1 from 'assets/img/landing/about/About_Landing-08.png';
import img2 from 'assets/img/landing/about/About_Landing-09.png';
import img3 from 'assets/img/landing/about/About_Landing-10.png';
import img4 from 'assets/img/landing/about/About_Landing-11.png';
import img5 from 'assets/img/landing/about/About_Landing-12.png';
import img6 from 'assets/img/landing/about/About_Landing-14.png';
import img7 from 'assets/img/landing/about/About_Landing-15.png';

import "assets/css/about.css";
class Home extends React.Component {
  
  


  render() {
  
    return (
      <>
        <div className="landing">
        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3">
          <img src={img1} alt="s" className="simgr img1" />
                <img src={img2} alt="s" className="imgr img2"/>
                <img src={img3}  alt="s" className="simgr img3"/>
                <img src={img4} alt="s" className="simgr img4"/>
                <img src={img5}  alt="s" className="simgr img5"/>
                <img src={img6} alt="s" className="simgr img6"/>
                <img src={img7} alt="s" className="simgr img7"/> 
        </div>
        <div className="div-4">
            <h1 className="about_heading"><b>About</b></h1>
        </div>
    </div>
      </>
    );
  }
}

export default Home;
