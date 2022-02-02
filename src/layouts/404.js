import React from "react";
import "assets/css/404.css";
import { Link } from 'react-router-dom';
class Home extends React.Component {
  
  render() {
  
    return (
      <div className="bodyo">
      <div className="mars"></div>
<img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" alt="not loaded" />
<img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" alt="not loaded" />
<p className="title">Oh no!!</p>
<p className="subtitle">
    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
</p>
<div align="center">
    <Link to="/">Back to previous page</Link>
</div>
<img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" alt="not loaded" />
<img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" alt="not loaded" />
      </div>
    );
  }
}

export default Home;
