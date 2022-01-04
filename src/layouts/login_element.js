import React from "react";
import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'

import beapartwavet from 'assets/img/landing/home/waves/beapartwavetop.png'
import beapartwaveb from 'assets/img/landing/home/waves/beapartwavebtm.png'

// reactstrap components
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

import border from 'assets/img/landing/donate/border.png';
function Login() {
  return (
    <>
<div className="container" data-aos="zoom-in" style={{marginTop: '3.5rem'}}>
                <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black">Why Adhyanshala?</h1>
                   
                </div>
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center align-middle">
                            <img src={astronaut} width="73%" alt='img' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-start px-sm-3 p-md-0">

                        Adhyanshala deals with ruling out the problem of rural education by providing them the basis for education through virtual platforms.On the website there will be providing Gadgets which can be taken on rent to accelerate the education for the students who live in rural or areas with lack of technology.These will be preloaded with various educational softwares.Students do not have access to latest gadgets , hence we developed small gadget libraries where they can issue gadgets on rental basis at an affordable cost. On the website there will be providing Gadgets which can be taken on rent to accelerate the education for the students who live in rural or areas with lack of technology.These will be preloaded with various educational softwares.
                        </p>
                        <button className="btn btn-primary mt-2">Learn More</button>

                    </div>
                </div>
            </div>
      <div className="container mb-5" data-aos="zoom-in">
        <div className="row">

          <div className="col-md-7">
            <div className="d-flex justify-content-center">
              <div>
                <div className="row mt-5">
                  <h2 className="text-black mt-5">Reliable, efficient delivery</h2>
                  <p className="mt-4">Our Artificial Intelligence powered tools use millions of project data<br /> points to ensure that your project is successful</p>
                </div>
                <div className="row mt-4" data-aos="fade-down">
                  <div className="landing-card">
                    <p className="mt-4 text-center d-flex justify-content-center align-items-center px-3"> <i className="fab fa-gratipay port-icon mx-auto"></i> <span className="px-3">Our Artificial Intelligence powered tools use millions of project data</span></p>
                  </div>
                </div>
                <div className="row mt-4" data-aos="fade-down">
                  <div className="landing-card">
                    <p className="mt-4 text-center d-flex justify-content-center align-items-center px-3"> <i className="fab fa-gratipay port-icon mx-auto"></i> <span className="px-3">Our Artificial Intelligence powered tools use millions of project data</span></p>
                  </div>
                </div>
                <div className="row mt-4" data-aos="fade-down">
                  <div className="landing-card">
                    <p className="mt-4 text-center d-flex justify-content-center align-items-center px-3"> <i className="fab fa-gratipay port-icon mx-auto"></i> <span className="px-3">Our Artificial Intelligence powered tools use millions of project data</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-end align-items-center h-100 mt-5">
              <img src={astronaut} width="95%" alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-aos="zoom-in" style={{ marginTop: '3.5rem' }}>
        <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
          <h1 className="text-black">Overview</h1>
          <p className="mt-1">
            Our Artificial Intelligence powered tools use millions of project data
          </p>
        </div>
        <div className="row justify-content-center" style={{ marginTop: '3.5rem' }}>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>

        </div>
        <div className="row justify-content-center" style={{ marginTop: '3.5rem' }}>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
          

        </div>
        <div className="row justify-content-center" style={{ marginTop: '3.5rem' }}>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="text-center">
                <h5>Heading</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicingamet .</p>
              </div>
            </div>
          </div>
         
          

        </div>
      </div>
      
      <img src={beapartwavet} width="100%" style={{marginTop:"8rem"}} alt='img' />
            <div className="container-fluid" style={{ "background": "#000033" }} >
                <div className="row">
                    <div className="col-12">
                        <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                        <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                        <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                        <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                    </div>
                </div>

            </div>
            <img src={beapartwaveb} width="100%" className="mb-5" alt='img' />
            <Col lg="5" md="7" className="center" style={{ marginTop: "8rem" }}>
        <Card className="bg-secondary shadow border-0">
          <img className="imgs" src={border} style={{ borderRadius: '20px', }} alt="" />
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-5 mb-3">
              <h1>Login</h1>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">

            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
}



export default Login;
