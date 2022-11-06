import React, { Fragment, useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import arrowDown from "../images/icon-arrow-down.svg";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const style = {
        opacity: isActive ? 1 : 0,
        transform: `translateX(${isActive ? 0 : -200 }px)`,
    }

    return (
        <Fragment>
            <div className="header">
                <div className="navbar">
                    <img src={logo} alt="logo" className="sunnyside-logo" />
                    <img className="mobile" src={hamburger} alt="hamburger" onClick={() => { setIsActive(!isActive) }} />
                    <div className="navbar-desktop-links desktop">
                        <p className="nav-about">About</p>
                        <p className="nav-services">Services</p>
                        <p className="nav-projects">Projects</p>
                        <p className="nav-contact">CONTACT</p>
                    </div>
                </div>
                <div className="intro">
                    <p className="we-are-creative">WE ARE CREATIVES</p>
                    <img className="arrow-down" src={arrowDown} alt="arrow-down" />
                </div>
                <div className="navbar-modal" style={style}>
                    <p className="navbar-about">About</p>
                    <p className="navbar-services">Services</p>
                    <p className="navbar-projects">Projects</p>
                    <button className="navbar-contact">CONTACT</button>
                </div>
            </div>
        </Fragment>        
    );
};

export default Navbar;
