import 'assets/css/footer.css';
import { Link } from 'react-router-dom';
import footer_logo from 'assets/img/landing/home/adhyanshala_footer_logo_last.png';
const Contact = () => {
    return (
        <div >
            <footer class="footer-02">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-10 col-lg-6">
                            <div class="subscribe mb-5">
                                <form action="#" class="subscribe-form">
                                    <div class="form-group d-flex">
                                        <input type="text" class="form-control rounded-left" placeholder="Enter email address" />
                                        <input type="submit" value="Subscribe" class="form-control submit px-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-lg-5">
                            <div class="row">
                                <div class="col-md-12 col-lg-9 mb-md-0  mb-4">
                                    <Link><img src={footer_logo} className="logo-box mt-4 mb-4" style={{ width: '70%' }} alt="error" /></Link>
                                    <p> Adhyanshala is a complete online learning platform, which is specially curated for the rural population of our country. We provide everything, the best teachers, a lot of skill-based courses, an easy-to-use multilingual user interface, and much more.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-7">
                        
                            <div class="row">
                                <div class="col-md-4 mb-md-0 mt-3 border-left">
                                <h2 className=' ml-2 footer-heading'>Services</h2>
                                    <ul class="list-unstyled ">
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/skills">Skill development</Link></li>
                                    </ul>
                                </div>
                                <div class="col-md-4  mb-md-0 mt-6 ">
                                    <ul class="list-unstyled ">
                                        <li><Link to="/beapart">Be A Part</Link></li>
                                        <li><Link to="/donate">Donate</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                
                                <div class="col-md-4 mb-md-0 mt-3 border-left">
                                    <h2 class="footer-heading">Social</h2>
                                    <ul class="list-unstyled">
                                        <li><Link href="#" class=" d-block">Facebook</Link></li>
                                        <li><Link href="#" class=" d-block">Twitter</Link></li>
                                        <li><Link href="#" class="d-block">Instagram</Link></li>
                                        <li><Link href="#" class="d-block">Googleplus</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5  partner-wrap">
                        <div class="col-md-6 col-lg-8">
                            <p class="copyright">
                            <div className="copyright">Adhyanshala &copy; 2022 All Right Reserved</div>
                            </p>
                        </div>
                        <div class="col-md-6 col-lg-4 text-md-right">
                            <p class="mb-0 list-unstyled">
                                <Link class="mr-md-3" >Terms</Link>
                                <Link class="mr-md-3" href="#">Privacy</Link>
                                <Link class="mr-md-3" href="#">Compliances</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </footer>
            {/* <footer className="main-footer hero">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="logo-widget footer-widget">

                                    <Link><img src={footer_logo} className="logo-box" style={{ width: '70%' }} alt="error" /></Link>

                                    <div className="text">
                                        <p> Adhyanshala is a complete online learning platform, which is specially curated for the rural population of our country. We provide everything, the best teachers, a lot of skill-based courses, an easy-to-use multilingual user interface, and much more.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                                <div className="service-widget footer-widget">
                                <div className="footer-title text-center">Services</div>
                                    <ul className="list">
                                    
                                        <div className='d-flex justify-content-between'>
                                            <div className="text-center" >
                                                <li><Link to="/home">Home</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/skills">Skill<br/> development</Link></li>
                                            </div>
                                            <div  className="text-center" >
                                                <li><Link to="/beapart">Be A Part</Link></li>
                                                <li><Link to="/donate">Donate</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </div>
                                        </div>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                            
                                <div className='ml-5'>
                                    <div className="footer-title">Contacts</div>
                                    <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                                 <div className="text mt-3">
                                 
                                        <p>adhyanshaladotin@gmail.com</p>
                                        <ul className="footer-social d-flex ">
                                            <li><Link><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link><i className="fab fa-vimeo-v"></i></Link></li>
                                            <li><Link><i className="fab fa-google-plus-g"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
            <div className="footer-bottom hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 column" style={{ float: 'right' }}>
                            <div className="copyright"><Link>Adhyanshala</Link> &copy; 2022 All Right Reserved</div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <ul className="footer-nav">
                                <li><Link >Terms of Service</Link></li>
                                <li><Link >Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
}
export default Contact;
