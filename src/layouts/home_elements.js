import React from 'react'
import homewavet from 'assets/img/landing/home/waves/homewavetop.png'
import homewaveb from 'assets/img/landing/home/waves/homewavebtm.png'

import 'assets/css/landing.css'
import astronaut from 'assets/img/landing/home/Be_A_Part-03.svg'
import astronaut1 from 'assets/img/landing/home/laptop_ass-04.svg'
export default function main() {

    return (
        <div>
            {/* Section-1 */}
            <div className="container" data-aos="zoom-in" style={{marginTop: '3.5rem'}}>
                <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                    <h1 className="text-black">Overview</h1>
                    <p className="mt-1">
                        Our Artificial Intelligence powered tools use millions of project data
                    </p>
                </div>
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center align-middle">
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_1cazwtnc.json"  background="transparent"  speed="1"  style={{"width": "300px", "height": "300px"}}  loop  autoplay></lottie-player>

                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-start px-sm-3 p-md-0">
                        Adhyanshala deals with providing top-quality education to the underdeveloped sections of society in India. We aim to increase our reach to the remotest areas of the country and provide high-quality education there. This will help impart education to every nook and corner of the country and therefore improve the literacy rate
                        </p>
                        <button className="btn btn-primary mt-2">Learn More</button>

                    </div>
                </div>
            </div>
            {/* feature strip */}
            <div className="container">
                <div className="row" style={{marginTop: '3rem'}}>
                    <div className="col-md-2 col-sm-4 col-6 mt-3 ">
                        <div className="feature-card text-center">
                             <lord-icon
                                    src="https://cdn.lordicon.com/oswatybr.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">
                            <lord-icon
    src="https://cdn.lordicon.com/jqeuwnmb.json"
    trigger="loop"
    colors="primary:#000033,secondary:#000033"
    style={{ width: '100px', height: '100px' }}
                                    >
</lord-icon>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">

                            <lord-icon
                                    src="https://cdn.lordicon.com/anihkfxp.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">
                            <lord-icon
                                    src="https://cdn.lordicon.com/wxnxiano.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">

                            <lord-icon
                                    src="https://cdn.lordicon.com/soseozvi.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3">
                        <div className="feature-card text-center">
                           <lord-icon
                                    src="https://cdn.lordicon.com/qhgmphtg.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '100px', height: '100px' }}>
                                </lord-icon>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section-2 */}
            <div className="container" style={{marginTop: '5.5rem'}}>
                <div className="main-text section-title mb-5 text-center" data-aos="zoom-in">
                    <h1 className="text-black">What is our goal and what are we aiming to change?
</h1>
                    <p className="mt-1">Our Artificial Intelligence powered tools use millions of project data</p>
                </div>
                <div className="row" data-aos="zoom-in">

                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">
                                                <lord-icon
                                    src="https://cdn.lordicon.com/anihkfxp.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '40px', height: '40px' }}>
                                </lord-icon>
                                        </div>

                                        <h2 className="text-center">                            
                                heading</h2>
                                        <p className="text-center">we aim to change the way of teaching and learning in rural India
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">
                                             <lord-icon
                                    src="https://cdn.lordicon.com/anihkfxp.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '40px', height: '40px' }}>
                                </lord-icon>
                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">we intend to expose more of our population to the best of technology</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">
                                             <lord-icon
                                    src="https://cdn.lordicon.com/anihkfxp.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '40px', height: '40px' }}>
                                </lord-icon>
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
                                                 <lord-icon
                                    src="https://cdn.lordicon.com/anihkfxp.json"
                                    trigger="loop"
                                    colors="primary:#000033,secondary:#000033"
                                    style={{ width: '40px', height: '40px' }}>
                                </lord-icon>
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
                                                 
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_jm7mv1ib.json"  background="transparent"  speed="1"  style={{"width": "500px", "height": "500px"}}  loop  autoplay></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
`           {/* wave secrion-3 */}
            <img src={homewavet} width="100%" className="mt-5" alt='img' />
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
            <img src={homewaveb} width="100%" className="mb-5" alt='img' />
            <div className="container" style={{marginTop: '5.5rem'}}>
                <div className="main-text section-title mb-5 text-center" data-aos="zoom-in">
                    <h1 className="text-black">What we do?</h1>
                    <p className="mt-1">Our Artificial Intelligence powered tools use millions of project data</p>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center">
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_iwlmrnb5.json"  background="transparent"  speed="1"  style={{"width": "300px", "height": "300px"}}  loop  autoplay></lottie-player>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 test-start px-sm-3 p-md-0">
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

            <div className="container" style={{marginTop: '4rem'}}>
                <div className="main-text section-title mb-5 text-center" data-aos="zoom-in">
                    <h1 className="text-black">What we do?</h1>
                    <p className="mt-1">Our Artificial Intelligence powered tools use millions of project data</p>
                </div>
                <div className="row justify-content-center points" data-aos="zoom-in">
                    <div className="col-md-6 col-lg-6 d-flex align-items" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">

                        <div className="icon"><i className="fas fa-chart-line"></i></div>
                            <h3 className="title">Our Mission</h3>
                            <p className="description">India has the second-largest population of just under 1.4 billion people, out of that about 1 billion people live in under-developed rural areas of our country. We at Adhyanshala believe that this is a gift in disguise for our country and if the rural youth is given proper education and exposure to technology then we can be the global leader in the manufacturing and services sector in no time.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex align-items" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-chart-line"></i></div>
                            <h3 className="title">Our Mission</h3>
                            <p className="description">India has the second-largest population of just under 1.4 billion people, out of that about 1 billion people live in under-developed rural areas of our country. We at Adhyanshala believe that this is a gift in disguise for our country and if the rural youth is given proper education and exposure to technology then we can be the global leader in the manufacturing and services sector in no time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center points" data-aos="zoom-in">
                    <div className="col-md-6 col-lg-6 d-flex align-items" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-chart-line"></i></div>
                            <h3 className="title">Our Mission</h3>
                            <p className="description">India has the second-largest population of just under 1.4 billion people, out of that about 1 billion people live in under-developed rural areas of our country. We at Adhyanshala believe that this is a gift in disguise for our country and if the rural youth is given proper education and exposure to technology then we can be the global leader in the manufacturing and services sector in no time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}