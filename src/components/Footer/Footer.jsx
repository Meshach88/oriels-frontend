import React from "react";
import "./Footer.css";
import { assets } from "../../assets";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.Ologo} width={100} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            sapiente odit eveniet blanditiis adipisci ducimus.
          </p>
          <div className="footer-social-icons">
            <FaFacebookF style={{color:'white', margin:'10px'}}/>
            <FaInstagram style={{color:'white', margin:'10px'}} />
            <FaXTwitter style={{color:'white', margin:'10px'}}/>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234 706958677</li>
            <li>contact@oriels.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; oriels.com {" - "} All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
