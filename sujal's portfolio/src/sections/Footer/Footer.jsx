import React from "react";
import "./Footer.css";
import fb from "@/assets/facebook-f.svg";
import insta from "@/assets/insta-f.svg";
import x from "@/assets/x-f.svg";
import dribble from "@/assets/dribble-f.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-left">Crafted With Care By Myportfolio©2024</p>

        <div className="footer-icons">
          <a href="#">
            <img src={fb} alt="" />
          </a>
          <a href="#">
            <img src={x} alt="" />
          </a>
          <a href="#">
            <img src={insta} alt="" />
          </a>
          <a href="#">
            <img src={dribble} alt="" />
          </a>
        </div>

        <div className="footer-links">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
