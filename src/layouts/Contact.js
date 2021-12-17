import React from "react";
// reactstrap components
import "assets/css/contact.css";
import img1 from "assets/img/landing/contact/contact-03.png"
import img2 from "assets/img/landing/contact/contact-04.png"
import img3 from "assets/img/landing/contact/contact-05.png"
class Home extends React.Component {
  render() {
    return (
      <>
        <div class="landing">
            <div class="cdiv-1"></div>
            <div class="cdiv-2"></div>
            <div class="cdiv-3">
                <img src={img1} class="imgr cimg1" alt="s" />
                <img src={img2} class="imgr cimg2" alt="s"/>
                <img src={img3} class="imgr cimg3" alt="s"/>            
            </div>
            <div class="cdiv-4">
               <h1 class="heading"><b> Contact</b></h1>
            </div>
            
        </div>
      </>
    );
  }
}

export default Home;
