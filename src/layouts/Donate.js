import React from "react";
import img1 from 'assets/img/landing/donate/donate-03.png';
import img2 from 'assets/img/landing/donate/donate-04.png';
import img3 from 'assets/img/landing/donate/donate-05.png';
import img4 from 'assets/img/landing/donate/donate-06.png';
import img5 from 'assets/img/landing/donate/donate-07.png';
import Donates from './donate_elements.js';
import 'assets/css/donate.css';
import Menu from './Menu.js';
import Footer from './footer.js';
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

 componentDidMount(){
        window.scrollTo(0,0);
    }
  render() {
  
    return (
      <>
      <Menu/>
      <div  className={(this.state.visibles===false ? 'landing2 hero' :'landing hero')} >
            <div className={(this.state.visibles===false ? 'ddiv-11' :'ddiv-1')}></div>
            <div className={(this.state.visibles===false ? 'ddiv-22' :'ddiv-2')}></div>
            <div className="ddiv-3">
                <img src={img1} className="dimgr dimg1" alt="img1"/>
                <img src={img2} className="dimgr dimg2" alt="img2" />
                <img src={img3} className="dimgr dimg3" alt="img2" />
                <img src={img4} className="dimgr dimg4" alt="img2" />
                <img src={img5} className="dimgr dimg5" alt="img2" />

                  
            </div>
            <div className="ddiv-4">
               <h1 className="donate__heading"><b>Donate</b></h1>
             
            </div>
            <div className="sdiv-3 buttons">
              
            </div>
        </div>
        {this.state.visibles===false && <Donates/>}
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
