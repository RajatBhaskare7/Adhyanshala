import React from "react";
import "assets/css/404.css";
import { Link } from 'react-router-dom';
class Home extends React.Component {
  
  render() {
  
    return (
      <div className="bodyo">
      <div className="mars"></div>
<img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
<img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
<p className="title">Oh no!!</p>
<p className="subtitle">
    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
</p>
<div align="center">
    <Link class="btn-back" to="/">Back to previous page</Link>
</div>
<img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" />
<img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" />
      </div>
    );
  }
}

export default Home;
