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
import Contact from './Donate.js';

import border from 'assets/img/landing/donate/border.png';

import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'
function Home() {
    
  return (
    <>
    <Contact/>
      {/* Page content */}
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
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                  </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contact"
                    type="email"
                    
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Address" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                                          </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contact"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Gadget Type"
                    type="text"
                   
                  />
                </InputGroup>
              </FormGroup>
			               <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="to"
                    type="date"
                   
                  />
                </InputGroup>
              </FormGroup>
             <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                  
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="To"
                    type="date"
                   
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4 " color="primary" type="button">
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
export default Home;
