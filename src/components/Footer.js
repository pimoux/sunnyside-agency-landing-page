import React from "react";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
        <h1 className="footer-title">sunnyside</h1>
        <div className="footer-navbar">
            <p className="footer-about">About</p>
            <p className="footer-services">Services</p>
            <p className="footer-projects">Projects</p>
        </div>
        <div className="icons">
            <img className="icon" src={facebook} alt="facebook" />
            <img className="icon" src={instagram} alt="instagram" />
            <img className="icon" src={twitter} alt="twitter" />
            <img className="icon" src={pinterest} alt="pinterest" />
        </div>
    </div>
  );
};

export default Footer;
