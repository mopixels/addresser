import React from 'react';
import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {

	function currYear() {
		let year = new Date().getFullYear();
			return year;
		}

	return (
		<footer className='footer'>
			<div className='footer__company'>
				<h3 className="heading-3">Explore</h3>
					<a href='about' onClick={ (event) => event.preventDefault() } className='footer__company-link'>About</a>
					<a href='help' onClick={ (event) => event.preventDefault() } className='footer__company-link'>Need Help?</a>
					<a href='faq' onClick={ (event) => event.preventDefault() } className='footer__company-link'>FAQ</a>
					<a href='privacy' onClick={ (event) => event.preventDefault() } className='footer__company-link'>Privacy</a>
			</div>

			<div className="footer__location">
				<h3 className="heading-3">Visit us</h3>
					<a href="https://goo.gl/maps/B6Lps1rdXPkVgPXN6" target="_blank" rel="noopener noreferrer" className="footer__location-address">
						<span>221b Baker St. </span>
						<span>London NW1 6XE </span>
						<span>United Kingdom </span>
					</a>
			</div>

			<div className="footer__contacts">
				<h3 className="heading-3">Contact us</h3>
					<a href='mailto: #' className='footer__contacts-link'>engage@addresser.com</a>
					<span href='tel: +37067642259' className='footer__contacts-link'>+44 1234 567890</span>
			</div>

			<div className='footer__social'>
				<div className='footer__social-media'>
					<a href="https://www.linkedin.com/in/modestas-rimkus-6682a780/" target='_blank' rel="noopener noreferrer" ><FaLinkedin className="footer__icon" /> </a>
					<a href="https://github.com/mopixels" target='_blank' rel="noopener noreferrer" ><FaGithubSquare className="footer__icon" /></a>
					<a href="https://www.instagram.com/mo.pixels" target='_blank' rel="noopener noreferrer" ><FaInstagram className="footer__icon" /></a>
					
				</div>
				<div className='footer__social-copyright'>
					<p>Built by Modestas Rimkus</p>
					<span className=''> © {currYear()} aDDRESSER. All rights reserved </span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;