import React from "react";
// reactstrap components
import {
    Button,
    Card,
   
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
   
    Col,
} from "reactstrap";
import contactwavet from 'assets/img/landing/home/waves/contactwavetop.png'
import contactwaveb from 'assets/img/landing/home/waves/contactwavebtm.png'
import border from './../assets/img/landing/donate/donate border.png';
import "assets/css/contact.css";

import firebase from "../config/firebase-ad.js";
class Home extends React.Component {

  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleEmail= this.handleEmail.bind(this);
      this.handleMobile= this.handleMobile.bind(this);
      this.handleMessage =this.handleMessage.bind(this);
      this.state={
        visibles:false,
        style:'start',
        name:'',
        email:'',
        mobile:'',
        message:'',
      }
    }
   handleSubmit = (e) => {

    e.preventDefault();
    const db = firebase.database();
    const ref = db.ref("Contact/");
    ref.push({
      data: {
        name: this.state.name,
        email:this.state.email,
        mobile:this.state.mobile,
        message:this.state.message,
      },
    }).then(() => {
        alert("Done Successfully!");
        window.location.href = "/contact";
      });
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
    
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
   
  };
  handleMobile = (e) =>{
    this.setState({mobile :e.target.value});
  }
  handleMessage =(e) =>{
    this.setState({message :e.target.value});
  }
  render() {
    return (
      <div className="hero" >
        <div className="d-flex mb-3 align-item-center justify-content-center" >
       <Col className="mt-5 "  lg ="6" md="8">
        <Card className="bg-secondary shadow border-0" >

          <img className="imgs" src={border}  style={{borderRadius:'20px',}} alt="not able to load"/>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-5">
              <h2 style={{fontSize:'40px',fontWeight:'600',paddingTop:'20px',color:'#000033'}}>Contact Form</h2>
            </div>
            <Form role="form" className="mt-7"  onSubmit={this.handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" 
                  value={this.state.name}
                      onChange={this.handleName}
                  type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="far fa-envelope"></i>
                  </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="E-mail"
                    type="email"
                    value={this.state.email}
                      onChange={this.handleEmail}
                  />
                </InputGroup>
              </FormGroup>
             
             
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-phone-alt"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Mobile Number"
                    type="text"
                   value={this.state.mobile}
                      onChange={this.handleMobile}
                  />
                </InputGroup>
              </FormGroup>
                     <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="fas fa-comment-dots"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Write your Message here"
                    type="textarea"
                   value={this.state.message}
                      onChange={this.handleMessage}
                  />
                </InputGroup>
              </FormGroup>
            
              <div className="text-center">
                <Button className="mt-4 "  onSubmit={this.handleSubmit}  color="primary" type="submit">
                  Send
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
      </div>
      {/* wave secrion-3 */}
            <img src={contactwavet} width="100%" className="mt-5" alt='img' />
            <div className="container-fluid " style={{ "background": "#000033" }} >
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-white text-center quote_heading" >" Develop a passion for learning.If you do, you will never cease to grow."</h1>
                    </div>
                </div>

            </div>
        
            <img src={contactwaveb} width="100%" alt='img' />
      </div>
    );
  }
}

export default Home;
