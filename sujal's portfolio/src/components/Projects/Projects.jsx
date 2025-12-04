import React, { useRef } from "react";
import "./Projects.css";
import arrowLeft from "@/assets/left-arrow.svg";
import arrowRight from "@/assets/right-arrow.svg";

const projects = [
  { id: 1, title: "Website Design - 1", sub: "Product Design 2024" },
  { id: 2, title: "Website Design - 2", sub: "Product Design 2024" },
  { id: 3, title: "Website Design - 3", sub: "Product Design 2024" },
  { id: 4, title: "Website Design - 4", sub: "Product Design 2024" },
  { id: 5, title: "Website Design - 5", sub: "Product Design 2024" },
  { id: 6, title: "Website Design - 6", sub: "Product Design 2024" },
];

const categories = [
  "All",
  "Branding",
  "Design",
  "Development",
  "Content Writing",
  "Marketing",
];

const Projects = () => {
  const sliderRef = useRef(null);

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

  return (
    <section className="proj">
      <div className="proj-container">
        <p className="proj-label">My Portfolio 𓆩♡𓆪</p>

        <h2 className="proj-title">
          Review My <span>Latest</span> Projects
        </h2>

        <div className="proj-categories">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`proj-tab ${i === 0 ? "active" : ""}`}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="proj-wrapper">
          <div className="proj-slider" ref={sliderRef}>
            {projects.map((p) => (
              <div className="proj-card" key={p.id}>
                <div className="proj-img" />
                <h4>{p.title}</h4>
                <p>{p.sub}</p>
              </div>
            ))}
          </div>

          <div className="proj-arrows">
            <button
              className="proj-arrow "
              onClick={scrollLeft}
              type="button"
              aria-label="Scroll left"
            >
              <img src={arrowLeft} alt="left" />
            </button>

            <button
              className="proj-arrow "
              onClick={scrollRight}
              type="button"
              aria-label="Scroll right"
            >
              <img src={arrowRight} alt="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
