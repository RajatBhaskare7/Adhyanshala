import 'assets/css/footer.css';
import { Link } from 'react-router-dom';
import footer_logo from 'assets/img/landing/home/adhyanshala_footer.png';
const Contact = () =>{
	return(

		<div >
			 <footer className="main-footer hero">
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div className="logo-widget footer-widget">

                            <figure className="logo-box"><a href="#"><img src={footer_logo} alt="error"/></a></figure>
                                
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
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
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
                    <div className="copyright"><a href="#">Adhyanshala</a> &copy; 2019 All Right Reserved</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <ul className="footer-nav">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
		</div>
		);
}
 export default Contact;
