import React from 'react';
import './Footer.css'
import { AiFillYoutube } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer container'>
            <div className="nav-links">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/event'><li>Event</li></Link>
                    <Link to='/department'><li>Department</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/result'><li>Result</li></Link>
                    <Link to='/facilities'><li>Facilities</li></Link>
                </ul>
            </div>
            <div className="social-links">
                <img src="/sylhet-polytechnic-institute.png" alt="logo" />
                <h5>Sylhet Polytechnic Institute</h5>
                <p>Contact Us</p>
                <div className="icons">
                    <Link><AiFillYoutube color='red'/></Link>
                    <Link><BsFacebook color='blue' /></Link>
                    <Link><BsTwitter color='#00acee'/></Link>
                    <Link><RiWhatsappFill color='#25D366'/></Link>
                </div>
            </div>
            <div className="credit">
                <img src="/images/logo-ancor-point.jpg" alt="" />
                <h5>Website Developed by Ancor Point</h5>
            </div>
        </footer>
    );
};

export default Footer;