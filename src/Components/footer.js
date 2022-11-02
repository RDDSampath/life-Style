import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './Styles//footer.css'
//import images
import Logo from '../images/logo.png';
import facebook from '../images/fac.png';
import twitter from '../images/twt.png';
import linkedin from '../images/in.png';
import { ReactComponent as MySVG } from "../images/back.svg";

function Footer() {
    
    return (
        <div className='footer'>
            <ScrollToTop width='0.65vw' smooth component={<MySVG/>} />
            <div className='foot-nav-1'>
            <img className='logo-1' src={Logo} alt='logo'/><br/>
            <img className='f-s-icon' src={facebook} alt='facebook'/>
            <img className='f-s-icon' src={twitter} alt='twitter'/>
            <img className='f-s-icon' src={linkedin} alt='linkedin'/>
            </div>
            <a href='/' className='foot-nav' style={{marginLeft:'5vw'}}>HOME</a>
            <a href='/kids' className='foot-nav'>KIDS</a>
            <a href='/tech' className='foot-nav'>TECHNOLOGY</a>
            <a href='/resturant' className='foot-nav'>RESTURANT</a>
            <a href='/res' className='foot-nav'>RECIPE</a>
            <h5 className='f-copy-text'>©Copyright. All Rights Reserved.BY Dhanushka ❤</h5>
        </div>
    );
}
export default Footer;