import React, { useRef } from "react";
import "./Services.css";
import arrowLeft from "@/assets/left-arrow.svg";
import arrowRight from "@/assets/right-arrow.svg";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { services } from "../../utils/content";

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
      <div className="cnt">
        <button className="expert-arrow-left" onClick={scrollLeft}>
          <img src={arrowLeft} alt="←" />
        </button>
        <div className="expert-container">
          <h2 className="expert-title">
            My Expert <span className="title-areas">Areas</span>
          </h2>

          <p className="expert-subtitle">
            "Express Yourself Freely And Creatively, Using Customizable
            Templates Or Crafting Your Own Designs From Scratch, With Access To
            A Vast And Immersive Library."
          </p>
          <div className="expert-wrapper">
            <div className="expert-slider" ref={sliderRef}>
              {services.map((item) => (
                <ServicesCard key={item.id} service={item} />
              ))}
            </div>

            {/* <div className="expert-arrows"> */}

            {/* </div> */}
          </div>
        </div>
        <button className="expert-arrow-right" onClick={scrollRight}>
          <img src={arrowRight} alt="→" />
        </button>
      </div>
    </section>
  );
};

export default Services;
