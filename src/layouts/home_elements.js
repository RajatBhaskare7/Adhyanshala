import React from 'react'
import wave1 from 'assets/img/landing/home/div_-03.png'
import wave2 from 'assets/img/landing/home/div_-05.png'
import wave3 from 'assets/img/landing/home/div_-04.png'
import 'assets/css/landing.css'
import wave4 from 'assets/img/landing/home/div_header_footer-04.png'
import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'
import astronaut1 from 'assets/img/landing/home/laptop_ass-04.svg'
import { Container, Row, Col } from 'reactstrap'
export default function main() {

    return (
        <div>

            <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                <h1 className="text-black">About Us</h1>
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            {/* <Container>
            <Row>
                <Col lg="5" md="6" className="mt-5">
                <div className="d-flex justify-content-center">
                            <img src={astronaut} width="80%" alt='img'/>
                        </div>
                    </Col>
                    <Col lg="7" md="6" className="mt-5">
                    <p className="mt-5 text-center text-md-start px-sm-3 p-md-0">
                           Adhyanshala deals with providing top-quality education to the underdeveloped sections of society in India. We aim to increase our reach to the remotest areas of the country and provide high-quality education there. This will help impart education to every nook and corner of the country and therefore improve the literacy rate.
                        </p>
                    </Col>
                </Row>
            </Container> */}
            <div className="container" data-aos="zoom-in">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center">
                            <img src={astronaut} width="80%" alt='img' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-center text-md-start px-sm-3 p-md-0">
                            Adhyanshala deals with providing top-quality education to the underdeveloped sections of society in India. We aim to increase our reach to the remotest areas of the country and provide high-quality education there. This will help impart education to every nook and corner of the country and therefore improve the literacy rate.
                        </p>
                        <div className="row mt-5">
                            <div className="col-md-3 d-none d-lg-block">
                                <div className="icon"><i className="fas fa-swatchbook"></i></div>
                                <p>Learning</p>
                            </div>
                            <div className="col-md-3 d-none d-lg-block">
                                <div className="icon"><i className="fas fa-award"></i></div>
                                <p>Education</p>
                            </div>
                            <div className="col-md-3 d-none d-lg-block">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Studying</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-sm-block d-lg-none">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-sm-4 text-center">
                                <div className="icon"><i className="fas fa-chalkboard-teacher"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="icon"><i className="fas fa-swatchbook"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2 col-sm-4 col-6 mt-3 ">
                        <div className="feature-card text-center">
                            <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">
                            <div className="icon"><i className="fas fa-pencil-ruler"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">

                            <div className="icon"><i className="fas fa-laptop-code"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">
                            <div className="icon"><i className="fas fa-book-open"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">

                            <div className="icon"><i className="fas fa-book-reader"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">
                            <div className="icon"><i className="fas fa-microscope"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="main-text section-title mb-5 text-center" data-aos="zoom-in">
                    <h2 className="text-black">What we do?</h2>
                    <p className="mt-4">Our Artificial Intelligence powered tools use millions of project data</p>
                </div>
                <div className="row" data-aos="zoom-in">

                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">we aim to change the way of teaching and learning in rural India
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">we intend to expose more of our population to the best of technology</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">we want to create more opportunities for villagers to work in good places </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum sit Lorem, ipsum dolor dolor sit Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="d-flex justify-content-center">
                            <img src={astronaut1} width="100%" alt='img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="zoom-in">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center">
                            <img src={astronaut} width="80%" alt='img' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-center text-md-start px-sm-3 p-md-0">
                            Adhyanshala deals with providing top-quality education to the underdeveloped sections of society in India. We aim to increase our reach to the remotest areas of the country and provide high-quality education there. This will help impart education to every nook and corner of the country and therefore improve the literacy rate.
                        </p>
                    </div>
                </div>
                </div>
                <img src={wave2} width="100%" className="mb-5" alt='img' />


                <div className="container mt-5">
                    <div className="main-text section-title mb-5 text-center" data-aos="zoom-in">
                        <h2 className="text-black">What we do?</h2>
                        <p className="mt-4">Our Artificial Intelligence powered tools use millions of project data</p>
                    </div>
                    <div className="row" data-aos="zoom-in">
                        <div className="col-md-5 ">
                            <div className="d-flex justify-content-center">
                                <img src={astronaut1} width="100%" alt='img' />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center aligin-items-center">
                                        <div className="service-card py-2 px-3 mt-4">
                                            <div className="service-icon text-center">

                                            </div>
                                            <h2 className="text-center">Step-1</h2>
                                            <h1 className="text-center"><i className="fas fa-chart-line"></i></h1>

                                            <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum dolor sit Lorem, ipsum dolorsit Lorem, ipsum dolor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-md-5 mt-0">

                                    <div className="d-flex justify-content-center aligin-items-center">
                                        <div className="service-card py-2 px-3 mt-4">
                                            <div className="service-icon text-center">

                                            </div>
                                            <h2 className="text-center">Step-2</h2>
                                            <h1 className="text-center"><i className="fas fa-chart-line"></i></h1>
                                            <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum dolors it Lorem, ipsum dolor sit Lorem, ipsum dolor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center aligin-items-center">
                                        <div className="service-card py-2 px-3 mt-4">
                                            <div className="service-icon text-center">

                                            </div>
                                            <h2 className="text-center">Step-3</h2>
                                            <h1 className="text-center"><i className="fas fa-chart-line"></i></h1>
                                            <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum sit Lorem, ipsum dolor dolor sit Lorem, ipsum dolor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={wave3} width="100%" className="mt-5" alt='img' />
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
                <img src={wave4} width="100%" className="mb-5" alt='img' />


            </div>
            )
}
