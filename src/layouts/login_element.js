import React from "react";
import astro3 from 'assets/img/landing/home/Astronaut-03.png';
import why_astro from 'assets/img/landing/home/astro-1.png';
import beapartwavet from 'assets/img/landing/home/waves/beapartwavetop.png'
import beapartwaveb from 'assets/img/landing/home/waves/beapartwavebtm.png'

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
  Col,
} from "reactstrap";

import border from 'assets/img/landing/donate/donate border.png';
function Login() {
  return (
    <div className="hero">
<div className="container"  data-aos="zoom-in" style={{marginTop: '3.5rem'}}>
                <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black" style={{ fontSize:'40px'}}>What we Serve? </h1>
                   
                </div>
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className="justify-content-center align-middle">
                            <img src={why_astro} width="95%" alt='img' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-start px-sm-3 p-md-0">
                          Adhyanshala provides services to empower the youth of the country. It not only focuses on providing knowledge to the younger sessions but also considers all the age groups. We aim to provide education for students who are financially weak and also provide employment to teachers who are willing to teach and contribute in this noble cause. Not only this, NGO's and other non-profit organization who are willing to donate are also invited.
                        
                        </p>
                       

                    </div>
                </div>
            </div>
      <div className="container mb-5" data-aos="zoom-in">
        <div className="row">

          <div className="col-md-7">
            <div className="d-flex justify-content-center">
              <div>
                <div className="row mt-5">
                  <h2 className="text-black mt-5">The sections that we Aim</h2>
                  
                </div>
                <div className="row mt-4" data-aos="fade-down">
                  <div className="landing-card">
                    <p className="mt-4 text-center d-flex justify-content-center align-items-center px-3"> <i className="fab fa-gratipay port-icon mx-auto"></i> <span className="px-3">Students - Financially weaker students who are willing to learn.</span></p>
                  </div>
                </div>
                <div className="row mt-4" data-aos="fade-down">
                  <div className="landing-card">
                    <p className="mt-4 text-center d-flex justify-content-center align-items-center px-3"> <i className="fab fa-gratipay port-icon mx-auto"></i> <span className="px-3">Teachers - Retired or working teachers who are willing to teach these children</span></p>
                  </div>
                </div>
                <div className="row mt-4" data-aos="fade-down">
                  <div className="landing-card">
                    <p className="mt-4 text-center d-flex justify-content-center align-items-center px-3"> <i className="fab fa-gratipay port-icon mx-auto"></i> <span className="px-3">Non-profit organization- NGOs or other private non-profit organization who are willing to donate are invited.</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-end align-items-center h-100 mt-5">
              <img src={astro3} width="95%" alt='img' />
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-aos="zoom-in" style={{ marginTop: '3.5rem' }}>
        <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
          <h1 className="text-black">Fields in which you can contribute</h1>
          
        </div>
        <div className="row justify-content-center" style={{ marginTop: '3.5rem' }}>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <lord-icon src="https://cdn.lordicon.com/imamsnbq.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
              <div className="text-center">
                <h3>Underprivileged<br/> student</h3>
                <p>If you are willing to learn you can take benefit specially designed for underdeveloped students</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-7 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <lord-icon src="https://cdn.lordicon.com/jqnthkou.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
               <div className="text-center">
                <h3>NGOs/<br/>Non-profit <br/>Organization</h3>
                <p> Adhyanshala will be obliged if you can help us for this noble cause.</p>
              </div>
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <lord-icon src="https://cdn.lordicon.com/uqpazftn.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
              <div className="text-center">
                <h3>Private Organisations/Corporate Sector</h3>
                <p> Any sort of help regarding courses or resources for students is welcome.</p>
              </div>
             
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <lord-icon src="https://cdn.lordicon.com/jqeuwnmb.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
              <div className="text-center ">
                <h2 className="mt-4">Donate <br/> Gadgets</h2>
                <p> If you are a student and wish to donate gadgets you may reach out to us.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="row justify-content-center" style={{ marginTop: '3.5rem' }}>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
               <lord-icon src="https://cdn.lordicon.com/sodlceyy.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
              <div className="text-center">
                <h3> Working Teachers</h3>
                <p>If you are working as well as you wish to teach, you are hearty welcome.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <lord-icon src="https://cdn.lordicon.com/bwnhdkha.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
              <div className="text-center">
                <h3>Retired Teachers</h3>
                <p>If you are retired and wish to continue, Adhyanshala welcomes you with open arms.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <lord-icon src="https://cdn.lordicon.com/wxnxiano.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
              <div className="text-center">
                <h3> Donate Books</h3>
                <p>If you have any resources where students can access books for free, please contact us.</p>
              </div>
            </div>
          </div>
          

        </div>
        <div className="row justify-content-center" style={{ marginTop: '3.5rem' }}>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
                <lord-icon src="https://cdn.lordicon.com/uukerzzv.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
              <div className="text-center">

                <h3>Student</h3>
                <p> Buy plans and learn various courses remotely.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="statergy-card px-3 py-2 mt-5 mt-lg-0">
              <div className="icon-box box-3 text-center">
               <lord-icon src="https://cdn.lordicon.com/zpxybbhl.json" trigger="loop" colors="primary:#000033,secondary:#000033" style={{ width: '60px', height: '60px' }}></lord-icon>
              </div>
               <div className="text-center">

                <h3>Teacher Students</h3>
                <p>If you wish to teach and contribute you may contact us</p>
              </div>
            </div>
          </div>
         
          

        </div>
      </div>
      
      <img src={beapartwavet} width="100%" style={{marginTop:"8rem"}} alt='img' />
            <div className="container-fluid" style={{ "background": "#000033" }} >
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-white quote_heading text-center">"Education is not about solving problems <br/>it about opportunities to learn more."</h1>
                        
                    </div>
                </div>

            </div>
            <img src={beapartwaveb} width="100%" className="mb-5" alt='img' />
            <Col lg="5" md="7" className="center" style={{ marginBottom: "8rem" }}>
        <Card className="bg-secondary shadow border-0">
          <img className="imgs" src={border} style={{ borderRadius: '20px', }} alt="" />
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-5 mb-3">
              <h1>Login</h1>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">

            <Form role="form" className="mb-5">
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
        
      </Col>
    </div>
  );
}



export default Login;
