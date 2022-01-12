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

import border from './../assets/img/landing/donate/border.png';
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
        window.location.href = "/";
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
      <>
        <div className="d-flex align-item-center justify-content-center" >
       <Col className="mt-5 "  lg ="6" md="8">
        <Card className="bg-secondary shadow border-0" >

          <img className="imgs" src={border}  style={{borderRadius:'20px',}} alt="not able to load"/>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-5">
              <p style={{fontSize:'27px',fontWeight:'600',paddingTop:'20px',color:'#000033'}}>Contact Form</p>
            </div>
            <Form role="form"  onSubmit={this.handleSubmit}>
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
      </>
    );
  }
}

export default Home;
