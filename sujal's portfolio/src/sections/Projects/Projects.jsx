import React, { useRef, useState, useEffect } from "react";
import "./Projects.css";
import arrowLeft from "@/assets/left-arrow.svg";
import arrowRight from "@/assets/right-arrow.svg";
import white_img from "@/assets/proj-white.png";
import { projects, categories } from "../../utils/content";
import bow from "@/assets/bow.svg";

const Projects = () => {
  const sliderRef = useRef(null);

  const [activeCat, setActiveCat] = useState(0);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    const amount = Math.min(350, sliderRef.current.clientWidth * 0.8);
    sliderRef.current.scrollBy({ left: -amount, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    const amount = Math.min(350, sliderRef.current.clientWidth * 0.8);
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const sliderRect = slider.getBoundingClientRect();
      const sliderCenter = sliderRect.left + sliderRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      const cards = slider.querySelectorAll(".proj-card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;

        const distance = Math.abs(sliderCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCat(closestIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="proj" id="project">
      <div className="proj-container">
        <p className="proj-label">
          My Portfolio
          <span>
            <img src={bow} alt="" />
          </span>
        </p>

        <h2 className="proj-title">
          Review My <span>Latest</span> Projects
        </h2>

        <div className="proj-categories">
          {categories.map((cat, i) => (
            <p
              key={i}
              className={`proj-tab ${i === activeCat ? "active" : ""}`}
              type="button"
            >
              {cat}
            </p>
          ))}
        </div>

        <div className="proj-wrapper">
          <div className="proj-slider" ref={sliderRef}>
            {projects.map((p) => (
              <div className="proj-card" key={p.id}>
                <img src={white_img} alt="" className="proj-img" />
                <div className="proj-text-wrap">
                  <h4>{p.title}</h4>
                  <p>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="proj-arrows">
            <button className="proj-arrow" onClick={scrollLeft} type="button">
              <img src={arrowLeft} alt="left" />
            </button>

            <button className="proj-arrow" onClick={scrollRight} type="button">
              <img src={arrowRight} alt="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
