import React, { useRef } from "react";
import "./Services.css";
import arrowLeft from "@/assets/left-arrow.svg";
import arrowRight from "@/assets/right-arrow.svg";

const skills = [
  {
    id: 1,
    title: "WordPress",
    percent: "95%",
    desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Integer Nec Odio.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Figma",
    percent: "85%",
    desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Integer Nec Odio.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Web Development",
    percent: "90%",
    desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Integer Nec Odio.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Graphics Design",
    percent: "88%",
    desc: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Integer Nec Odio.",
    icon: "🖌️",
  },
];

const Services = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="expert">
      <div className="expert-container">
        <h2 className="expert-title">
          My Expert <span>Areas</span>
        </h2>

        <p className="expert-subtitle">
          "Express Yourself Freely And Creatively, Using Customizable Templates
          Or Crafting Your Own Designs From Scratch, With Access To A Vast And
          Immersive Library."
        </p>

        <div className="expert-wrapper">
          <button className="expert-arrow left" onClick={scrollLeft}>
            <img src={arrowLeft} alt="←" />
          </button>

          <div className="expert-slider" ref={sliderRef}>
            {skills.map((item) => (
              <div className="expert-card" key={item.id}>
                <div className="expert-icon">{item.icon}</div>
                <h3 className="expert-card-title">
                  {item.title} <span>({item.percent})</span>
                </h3>
                <p className="expert-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="expert-arrow right" onClick={scrollRight}>
            <img src={arrowRight} alt="→" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
