import React from 'react'
import aboutwavet from 'assets/img/landing/home/waves/aboutwavetop.png'
import aboutwaveb from 'assets/img/landing/home/waves/aboutwavebtm.png'
import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'
import astronaut1 from 'assets/img/landing/home/laptop_ass-04.svg'

export default function page() {
    return (
        <div>
            <div className="container" data-aos="zoom-in" style={{ marginTop: '3.5rem' }}>
                <div className="main-text section-title mt-5  text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black" style={{ fontSize:'60px'}}>About Us</h1>
                   
                </div>
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center align-middle">
                            <img src={astronaut} width="70%" alt='img' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-start px-sm-3 p-md-0">
                            Adhyanshala is a complete online learning platform, which is specially curated for the rural population of our country. We provide everything, the best teachers, a lot of skill-based courses, an easy-to-use multilingual user interface, and much more. We even provide gadgets on rent to all the needy students. All of what we are providing is useless without internet connectivity, so we would provide internet dongles in areas with poor connectivity and we will set up high bandwidth wifi in villages with no internet connectivity. This platform will be revolutionary for a rural student and it will fulfill a lot of dreams.This platform will be revolutionary for a rural student and it will fulfill a lot of dreams.
                        </p>
                    </div>
                </div>
            </div>
            <div id="points" className="points">
            <div className="container" data-aos="zoom-in" style={{ marginTop: '5rem' }}>
               
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/pijqcxrg.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                                <h3 className="title">Our Goal</h3>
                                <p className="description">.Adhyanshala literally translates to “House Of Education” and that’s exactly what we want to implement in all rural parts of our country. We want to make students feel at home with online education and latest technology.We strongly believe that education is the only way forward in life.
</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/jvucoldz.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                                <h3 className="title">Our Mission</h3>
                                <p className="description">India has the second largest population of just under 1.4 billion people, out of that about 1 billion people live in under-developed rural areas of our country. We at Adhyanshala believe that this is a gift in disguise for our country and if the rural youth is given proper education and exposure to technology then we can be the global leader in the manufacturing and services sector in no time.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/tyounuzx.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                                <h3 className="title">Our Vision</h3>
                                <p className="description">We are a tech-based learning platform to cater to the rural crowd of India.We cover everything including live online classes from the best instructors, the best handpicked online courses from all over the globe, a lot of tools for better accessibility of students.We do only one thing, we just teach, but we do it the best. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/iltqorsz.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                                <h3 className="title">Our Goal</h3>
                                <p className="description">We at Adhyanshala have a very positive vision for the country as time passes. We have a vision that every single villager has access to fast internet and all kinds of global technology. That exposure to technology will increase the employability of 1 billion and that will surely make India a developed country in very little time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <img src={aboutwavet} width="100%" style={{marginTop:"8rem"}} alt='img' />
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
            <img src={aboutwaveb} width="100%" className="mb-5" alt='img' />
            <section className="home-clients">
            <div className="container" data-aos="zoom-in" style={{marginTop: '2rem'}}>
                <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black">Overview</h1>
                    <p className="mt-1">
                        Our Artificial Intelligence powered tools use millions of project data
                    </p>
                </div>
                    <div className="clients-section">
                        <div className="clients-container">
                            <div className="clients-group">
                                <div className="clients-item hoopsai"></div>
                            </div>
                            <div className="clients-group">
                                <div className="clients-item agoda"></div>
                                <div className="clients-item getsafe"></div>
                            </div>
                            <div className="clients-group">
                                <div className="clients-item grab"></div>
                                <div className="clients-item crisp"></div>
                                <div className="clients-item anyleads"></div>
                            </div>
                            <div className="clients-group">
                                <div className="clients-item teachable"></div>
                                <div className="clients-item flyr"></div>
                            </div>
                            <div className="clients-group">
                                <div className="clients-item roger"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container" data-aos="zoom-in" style={{ marginTop: '3.5rem' }}>
                <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black">What we do </h1>
                    <p className="mt-1">
                        Our Artificial Intelligence powered tools use millions of project data
                    </p>
                </div>
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center align-middle">
                            <img src={astronaut} width="70%" alt='img' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-start px-sm-3 p-md-0">
                        .We are a tech-based learning platform to cater to the rural crowd of India.We cover everything including live online classes from the best instructors, the best handpicked online courses from all over the globe, a lot of tools for better accessibility of students.We do only one thing, we just teach, but we do it the best.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="zoom-in" style={{marginTop: '3.5rem'}}>
                <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black">Who all does Adhyanshala support?</h1>
                    <p className="mt-1">
                        Our Artificial Intelligence powered tools use millions of project data
                    </p>
                </div>
                <div className="row" data-aos="zoom-in">
                    
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">Student</h2>
                                        <lord-icon class="center"
    src="https://cdn.lordicon.com/eszyyflr.json"
    trigger="loop"
     colors="primary:#000033,secondary:#000033"
     style={{ width: '50px', height: '50px' }}>
</lord-icon>

                                        <p className="text-center">Helps students from underdeveloped sections of society learn extraordinary skills in the field of web development, graphic design and ,many more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-md-5 mt-0">

                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">
                                                
                                        </div>
                                        <h2 className="text-center">Adhyanshala</h2>
                                        <lord-icon class="center"
    src="https://cdn.lordicon.com/jjjmlddk.json "
    trigger="loop"
     colors="primary:#000033,secondary:#000033"
     style={{ width: '50px', height: '50px' }}></lord-icon>
                                        
                                        <p className="text-center"> We connect skilled teachers to students who are willing to learn.
</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">
                             
                                        </div>
                                        <h2 className="text-center">Teachers</h2>
                                        <lord-icon class="center"
    src="https://cdn.lordicon.com/dxjqoygy.json"
    trigger="loop"
     colors="primary:#000033,secondary:#000033"
     style={{ width: '50px', height: '50px' }}></lord-icon>
                                        <p className="text-center">Helps eradicate unemployment and provide job satisfaction to the teachers even after they retire.
</p>
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

        </div>
    )
}
