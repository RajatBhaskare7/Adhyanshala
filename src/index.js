/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Home from "layouts/Home.js";
import About from "layouts/About.js";
import Skills from "layouts/Skills.js";
import Donate from "layouts/Donate.js";
import Landing from "layouts/Landing.js";
import Contact from "layouts/Contact.js";
import Beapart from "layouts/Beapart.js";
import Demo from "layouts/loader.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" exact render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/about" render={(props)=> <About {...props}/>}/>
      <Route path="/contact" render={(props) => <Contact {...props} />} />
      <Route path="/donate" render={(props) => <Donate {...props} />} />
      <Route path="/skills" render={(props) => <Skills {...props} />} />
      <Route path="/home"  render={(props) => <Home {...props} />} />
      <Route path="/beapart" render={(props) => <Beapart {...props} />} />
      <Route path="/" render={props => <Landing {...props} />} />
      <Route path="/demo" render={(props) => <Demo {...props}/> }/>

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
