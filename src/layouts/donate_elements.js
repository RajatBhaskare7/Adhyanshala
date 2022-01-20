import React from "react";
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
import astronaut from 'assets/img/landing/home/laptop_ass-04.svg'

import border from './../assets/img/landing/donate/donate border.png';
import astronaut1 from 'assets/img/landing/home/Be_A_Part-03.svg'
import why_astro from 'assets/img/landing/home/astro-1.png';
import astro2 from 'assets/img/landing/home/astro-2.png'
import astronaut3 from 'assets/img/landing/home/Astronaut-05.png'
import donatewavet from 'assets/img/landing/home/waves/donatewavetop.png'
import donatewaveb from 'assets/img/landing/home/waves/donatewavebtm.png'
import firebase from "../config/firebase-ad.js";

import astro_donate from 'assets/img/landing/home/Astronaut-02.png'
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
    
    return (
      <div  className="hero">
    {/*  <div className="wave_landing">
          <div className="donate_waves"></div>
          <div className="donate_waves2"></div>
      </div>*/}
     
    <section id="testimonial" style={{background:"url(donatewavet)"}}  className=" mt-9 testimonial-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-5 col-lg-6">
                    <div className="testimonial-left-content mt-45">
                        <h4 className="title">Donate and Help!<br/> </h4>

                        <ul className="testimonial-line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <p className="text">It has been observed that most gadget users tend to discard their gadgets in a maximum duration of two years,so we are including a feature where people can donate old gadgets like old phones, tablets, PCs which they do not use anymore which can be distributed and used by the children living in rural areas to study. </p>

                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="testimonial-right-content mt-50">
                        <div className="quota">
                            <i className="lni lni-quotation"></i>
                        </div>
                        <div className="testimonial-content-wrapper testimonial-active">
                            <div className="single-testimonial">
                                <img src={astro_donate } width="65%" alt="s"/>
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
          <img className="imgs" src={border} style={{borderRadius:'20px',}} alt="border"/>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-5">
              <p style={{fontSize:'27px',fontWeight:'600',paddingTop:'20px',color:'#000033'}}>Donation Form</p>
            </div>
            <Form role="form" onSubmit={this.handleSubmit} className="mt-7">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" 
                  required
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
                    required
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
                        required
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
                      required
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
                   required
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
                   required
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
      <img src={donatewavet} width="100%" alt="" />
             
                <div className="container-fluid" style={{ "background": "#000033" }} >
                <div className="row">
                    <div className="col-12" >
                        <p className="text-center  text-white" style={{fontSize:'22px'}}>
                           Adhyanshala will allow all students to learn new skills and become more productive individuals and job-ready.<br/> We will have a lot of specially curated courses from global teachers which the students will be able to access anywhere, anytime.<br/> These courses will mainly be catered to anyone wanting to learn, we will also try in the future for multilingual courses to cater to a wider crowd.
                        </p>
                       

                    </div>

                </div>

            </div>
            <img src={donatewaveb} width="100%" alt='img' />
            <div className="container" data-aos="zoom-in" >
                <div className="main-text section-title mb-5 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black" style={{ fontSize:'40px'}}>3 ways you can donate</h1>

                   
                </div>
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1" data-aos="fade-right">
                            <div className="row">
                                <div className="col-md-6 my-auto">
                                    <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
                                        <div className="icon-box box-1 text-center">

                                            <lord-icon
                                    src="https://cdn.lordicon.com/qhviklyi.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '40px', height: '40px' }}>
                                </lord-icon>
                                        </div>
                                        <div className="text-center">
                                            <h2>Money</h2>
                                            <p>you can donate money and contribute in educating the future minds.
</p>

                                     
                                        </div>
                                        
                                    </div>
                                    <div className="statergy-card px-3 py-2 mt-5">
                                        <div className="icon-box box-2 text-center">

                                           <lord-icon
                                    src="https://cdn.lordicon.com/qhgmphtg.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '40px', height: '40px' }}>
                                </lord-icon>
                                        </div>
                                        <div className="text-center">
                                            <h2>Gadgets</h2>
                                            <p> You can donate gadgets, it will help save a child’s future as well as the environment.</p>

                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6 my-auto">
                                    <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
                                        <div className="icon-box box-3 text-center">

                                           <lord-icon
                                    src="https://cdn.lordicon.com/wxnxiano.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '40px', height: '40px' }}>
                                </lord-icon>
                                        </div>
                                        <div className="text-center">
                                            <h2>Books</h2>
                                            <p> You can also donate books to help our children gain as much as knowledge as possible.</p>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2" data-aos="fade-left">
                            <div className="d-flex justify-content-center">
                                <img src={astronaut3}  alt="s" />
                            </div>
                        </div>
                    </div>

                </div>

      </div>
    );
  }
}

export default Landing;