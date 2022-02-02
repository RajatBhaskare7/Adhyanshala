import React ,{Component} from "react";
import 'assets/css/404.css';

class Home extends Component {
  render() {
    
    return (
      <div className="bodyo" >
        <div className="mars"></div>
        <img src="https://assets.codepen.io/1538474/meteor.svg" alt="error" className="meteor" />

          <p  align="center" className="mt-9">
<lottie-player align="center" src="https://assets2.lottiefiles.com/packages/lf20_onebalwt.json" className=" d-flex align-item-center justify-content-center" background="transparent"  speed="1"  style={{ height:'300px',width:'300px'}}  loop autoplay></lottie-player>


          </p>


<img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" alt="error" />
    
      </div>
    );
  }
}

export default Home;
