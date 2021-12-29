import React from "react";
// reactstrap components
import "assets/css/contact.css";
import img1 from "assets/img/landing/contact/contact-03.png"
import img2 from "assets/img/landing/contact/contact-04.png"
import img3 from "assets/img/landing/contact/contact-05.png"
import Contacts from "./contact_elements.js";
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
            <div className="cdiv-1"></div>
            <div className="cdiv-2"></div>
            <div className="cdiv-3">
                <img src={img1} className="imgr cimg1" alt="s" />
                <img src={img2} className="imgr cimg2" alt="s"/>
                <img src={img3} className="imgr cimg3" alt="s"/>            
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
        {this.state.visibles===true && <Contacts/>}
      </>
    );
  }
}

export default Home;
