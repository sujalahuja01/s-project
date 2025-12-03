import React from "react";
import "./About.css";
import wiggly from "@/assets/wiggly.png";
import up_arrow from "@/assets/up-arrow.svg";
import bow from "@/assets/bow.svg";
import arrow_right from "@/assets/arrow-right.svg";
import { about } from "../../utils/content.js";

const About = () => {
  return (
    <section className="about">
      <div className="shape-bg">
        <div className="experience">
          <p className="exp-years">22+</p>
          <br />
          <span>
            Years Of <br /> Experience
          </span>
        </div>
        <img src={wiggly} alt="" className="wiggly-frame" />
        <div className="up-arrow">
          <img src={up_arrow} alt="" />
        </div>
      </div>

      <div className="right">
        <div className="right-content">
          <h3 className="about-title">
            About Us
            <span>
              <img src={bow} alt="" />
            </span>
          </h3>
          <h2 className="about-desc">
            "Crafting Enjoyable <span>Digital</span> Solutions From Business
            Ideas."
          </h2>
          <p>
            "I specialize in interface, digital product & user experience
            design, focusing on building products, brands, and websites."
          </p>
        </div>

        <ul className="points">
          {about.map((item, index) => (
            <li key={index}>
              <img src={arrow_right} alt="" />
              {item}
            </li>
          ))}
        </ul>

        <button className="download-btn">Download CV</button>
      </div>
    </section>
  );
};

export default About;
