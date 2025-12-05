import React from "react";
import "./Hero.css";
import aposs from "@/assets/aposs.svg";
import hero_blur from "@/assets/hero-blur.png";
import tri_blur from "@/assets/tri-blur.png";
import shapes from "@/assets/shapes.svg";

import grid from "@/assets/grid.svg";
import wave from "@/assets/wave.svg";
import arrow from "@/assets/tilt-arrow.svg";
import image from "@/assets/hero-img.png";

const Header = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-heading">
            HELLO I
            <span className="hero-aposs-wrapper">
              <img src={aposs} alt="" className="hero-aposs-base" />
              <span className="hero-aposs-top">’</span>
            </span>
            M
            <img src={wave} alt="" className="hero-wave-icon" />
            <br />
            DIANNE RUSSELL
          </h1>
          <div className="hero-desc-text">
            <p>
              I focus on making digital experiences that are easy to use, <br />
              enjoyable, and get the job done.
            </p>
          </div>
          <button className="hero-btn">
            How I, Work
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
        <div className="hero-right">
          <img src={image} alt="" className="hero-hero-img" />
        </div>{" "}
        {/* <img src={grid} alt="" className="hero-grid" />
        <img src={tri_blur} alt="" className="hero-tri-blur" />
        <img src={hero_blur} alt="" className="hero-blur-bg" /> */}
      </div>
    </section>
  );
};

export default Header;
