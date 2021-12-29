import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";

import border from './../assets/img/landing/donate/border.png';
import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'
import astronaut1 from 'assets/img/landing/home/laptop_ass-04.svg'
import wave3 from 'assets/img/landing/home/div_-04.png'
import wave4 from 'assets/img/landing/home/div_header_footer-04.png'
import About from './About.js';
import firebase from "../config/firebase-ad.js";

class Landing extends React.Component {
  constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleName = this.handleName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleContact = this.handleContact.bind(this);
      this.handleAddress = this.handleAddress.bind(this);
      this.handleMethod = this.handleMethod.bind(this);
      this.handleAmount= this.handleAmount.bind(this);
      this.state={
        visibles:false,
        style:'start',
        name:'',
        contact:'',
        email:'',
        address:'',
        method:'',
        amount:'',
      }
    }
   
    visible = () =>{
      
       
        this.setState({
            visibles:!this.state.visibles,
            style:'starty'
        });
        
    };
    
    handleSubmit = (e) => {
     
    e.preventDefault();
    const db = firebase.database();
    const ref = db.ref("Donate/");
    const a = ref.push({
      data: {
        name: this.state.name,
        contact:this.state.contact,
        email:this.state.email,
        address:this.state.address,
        method_of_Donation:this.state.method,
        amount_of_Donation :this.state.amount,
      },
    });

    const id = a.key;
    db.ref("Donate/" + id + "/data/")
      .update({
        c_id: id,
      })
      .then(() => {
        alert("Done Successfully!");
        window.location.href = "/donate";
      });
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
   
  };
  handleContact = (e) => {
    this.setState({ contact: e.target.value });
   
  };
  handleAddress = (e) => {
    this.setState({ address: e.target.value });
   
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
   
  };
  handleMethod = (e) => {
    this.setState({ method: e.target.value });
   
  };
  handleAmount = (e) => {
    this.setState({ amount: e.target.value });
   
  };
  
  render() {
    const {
      visibles,
      style,
      name,
      contact,
      email,
      address,
      method,
      amount
          } = this.state;
    return (
      <>
    <section id="testimonial"  className=" testimonial-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-5 col-lg-6">
                    <div className="testimonial-left-content mt-45">
                        <h6 className="sub-title">Testimonials</h6>
                        <h4 className="title">Who are we <br/> </h4>
                        <ul className="testimonial-line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p className="text">Duis et metus et massa tempus lacinia. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum. <br/> <br/> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="testimonial-right-content mt-50">
                        <div className="quota">
                            <i className="lni lni-quotation"></i>
                        </div>
                        <div className="testimonial-content-wrapper testimonial-active">
                            <div className="single-testimonial">
              
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
      <div className="d-flex align-item-center justify-content-center" >
       <Col className="mt-5 "  lg ="6" md="8">
        <Card className="bg-secondary shadow border-0" >
          <img className="imgs" src={border} style={{borderRadius:'20px',}}/>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-5">
              <p style={{fontSize:'27px',fontWeight:'600',paddingTop:'20px',color:'#000033'}}>Donation Form</p>
            </div>
            <Form role="form" onSubmit={this.handleSubmit}>
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
                    placeholder="Email"
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
                      <i className="fas fa-map-marker-alt"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Address" type="text"

                    value={this.state.address}
                      onChange={this.handleAddress}
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
                    placeholder="Contact"
                    type="number"
                    autoComplete="new-email"

                    value={this.state.contact}
                      onChange={this.handleContact}
                  />
                </InputGroup>
              </FormGroup>
              
                     <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   <i className="fas fa-money-check"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Method of Donation"
                    type="text"
                   
                    value={this.state.method}
                      onChange={this.handleMethod}
                  />
                </InputGroup>
              </FormGroup>
             <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                  <i className="fas fa-hand-holding-heart"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Amount of Donation"
                    type="number"
                   
                    value={this.state.amount}
                      onChange={this.handleAmount}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4 " onSubmit={this.handleSubmit} color="primary" type="submit">
                  Submit
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

export default Landing;
