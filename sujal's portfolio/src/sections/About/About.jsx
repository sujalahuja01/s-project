import React from "react";
import "./About.css";
import wiggly from "@/assets/wiggly.png";
import up_arrow from "@/assets/up-arrow.svg";
import bow from "@/assets/bow.svg";
import arrow_right from "@/assets/arrow-right.svg";
import download from "@/assets/download.svg";
import blur_bg from "@/assets/blur-bg.png";
import { about } from "../../utils/content.js";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="left-cluster">
            <div className="experience">
              <p className="exp-years">22+</p>
              <span>Years Of Experience</span>
            </div>

            <img src={wiggly} alt="" className="wiggly-frame" />

            <div className="up-arrow">
              <img src={up_arrow} alt="" />
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-content">
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
              "I Specialize In Interface, Digital Product & User Experience
              Design, Focusing On Building Products, Brands, And Websites."
            </p>
          </div>
          <div className="points">
            <ul>
              {about.map((item, index) => (
                <li key={index}>
                  <img src={arrow_right} alt="" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="download-btn">
            <span>
              <img src={download} alt="" />
            </span>
            Download CV
          </button>
        </div>
        {/* <img src={blur_bg} alt="" className="blur-bg" /> */}
      </div>
    </section>
  );
};

export default About;
