import React ,{Component} from "react";
import 'assets/css/style.css';
class Home extends Component {
  render() {
    
    return (
      <>
        <div className="screen d-flex align-item-center justify-content-center mt-9" >
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_onebalwt.json"  background="transparent"  speed="1"  style={{ height:'300px',width:'300px'}}  loop autoplay></lottie-player>
        </div>
      </>
    );
  }
}

export default Home;
