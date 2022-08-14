import React, { Fragment } from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
      <img src="https://res.cloudinary.com/buymybook/image/upload/v1659256700/logo_oqxij5.png" alt="Logo" width="110" />
        <h1>Acedemic Asset's.</h1>
      

        <p>Copyrights 2021 &copy; ! ifeelpankaj !</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/ifeelpankaj"><InstagramIcon/></a>
        <p>Instagram</p>
        <a href="http://instagram.com/ifeelpankaj"><FacebookIcon/></a>
        <p>Facebook</p>
        <a href="https://www.linkedin.com/in/ifeelpankaj/"><LinkedinIcon/></a>
        <p>LinkedIn</p>
      </div>
      
    </footer>
    <div className="blank">
    </div>
    </Fragment>
  );
};

export default Footer;
