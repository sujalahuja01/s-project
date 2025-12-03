import React from "react";
import "./Hero.css";
import aposs from "@/assets/aposs.svg";

import grid from "@/assets/grid.svg";
import wave from "@/assets/wave.svg";
import arrow from "@/assets/tilt-arrow.svg";
import image from "@/assets/hero-img.png";

const Header = () => {
  return (
    <section className="hero">
      <img src={grid} alt="" className="hero-grid" />
      <div className="hero-content">
        <h1 className="intro-text">
          HELLO I
          <span className="aposs-wrapper">
            <img src={aposs} alt="" className="aposs-base" />
            <span className="aposs-top">’</span>
          </span>
          M
          <img src={wave} alt="" className="wave-icon" />
          <br /> DIANNE RUSSELL
        </h1>
        <div className="desc-text">
          <p>
            I focus on making digital experiences that are easy to use, <br />
            enjoyable, and get the job done.
          </p>
        </div>
        <button className="hero-btn">
          How I, Work{" "}
          <span>
            <img src={arrow} alt="" />
          </span>
        </button>
      </div>
      <img src={image} alt="" className="hero-img" />
    </section>
  );
};

export default Header;
