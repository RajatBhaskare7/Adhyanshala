import 'assets/css/footer.css';
import { Link } from 'react-router-dom';
import footer_logo from 'assets/img/landing/home/adhyanshala_footer_logo.png';
const Contact = () =>{
	return(
		<div >
			 <footer className="main-footer hero">
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div className="logo-widget footer-widget">

                            <figure className="logo-box"><Link><img src={footer_logo} style={{height:'50%',width:'80%'}} alt="error"/></Link></figure>
                                
                            <div className="text">
                                <p> Adhyanshala is a complete online learning platform, which is specially curated for the rural population of our country. We provide everything, the best teachers, a lot of skill-based courses, an easy-to-use multilingual user interface, and much more.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                        <div className="service-widget footer-widget">
                            <div className="footer-title">Services</div>
                            <ul className="list">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/skills">Skill development</Link></li>
                                <li><Link to="/beapart">Be A Part</Link></li>
                                <li><Link to="/donate">Donate</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                        <div className="contact-widget footer-widget">
                            <div className="footer-title">Contacts</div>
                            <div className="text">
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
                <div className="col-lg-6 col-md-6 col-sm-12 column" style={{float:'right'}}>
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
    </div>
    
		</div>
		);
}
 export default Contact;
