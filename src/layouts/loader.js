import React ,{Component} from "react";
import 'assets/css/style.css';

class Home extends Component {
  render() {
    
    return (
      <>
        <div className="screen d-flex align-item-center pt-9 justify-content-center">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_onebalwt.json" className="d-flex align-item-center justify-content-center" background="transparent"  speed="1"  style={{ height:'300px',width:'300px'}}  loop autoplay></lottie-player>
        </div>
      </>
    );
  }
}

export default Home;
