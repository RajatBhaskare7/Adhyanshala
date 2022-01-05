import 'assets/css/footer.css';
const Contact = () =>{
	return(

		<div>
			 <div className="footer-basic">
        <footer>
            <div className="social"><i className="icon ion-social-instagram"></i><i className="icon ion-social-snapchat"></i><i className="icon ion-social-twitter"></i><i className="icon ion-social-facebook"></i></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/about">About</a></li>
                <li className="list-inline-item"><a href="/skills">Skill development</a></li>
                <li className="list-inline-item"><a href="/beapart">Be A Part</a></li>
                <li className="list-inline-item"><a href="/donate">Donate</a></li>
                <li className="list-inline-item"><a href="/contact">Contact</a></li>
            </ul>
            <p className="copyright">Company Name © 2018</p>
        </footer>
    </div>

		</div>
		);
}
 export default Contact;
