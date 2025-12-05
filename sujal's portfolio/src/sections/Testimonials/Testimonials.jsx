import React, { useState, useRef } from "react";
import "./Testimonials.css";
import quote from "@/assets/testi-quote.svg";
import left_arrow from "@/assets/left-arrow.svg";
import right_arrow from "@/assets/right-arrow.svg";

import { blogs } from "../../utils/content.js"; //
import bow from "@/assets/bow.svg";
import testi_blur from "@/assets/testi-blur.png";

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (touchStartX.current - endX > 50) nextSlide();
    if (endX - touchStartX.current > 50) prevSlide();
  };

  return (
    <section className="testi">
      <div className="testi-container">
        <p className="testi-label">
          Testimonial
          <span>
            <img src={bow} alt="" />
          </span>
        </p>

        <h2 className="testi-title">
          What My <span>Clients</span> Say
        </h2>

        <div className="testi-content">
          <div className="testi-left">
            <img src={quote} alt="" className="testi-quote" />

            <h4 className="testi-name">Leslie Alexander</h4>

            <div className="testi-stars">★★★★★</div>

            <p className="testi-desc">{blogs[active].description}</p>

            <div className="testi-controls">
              <div className="testi-nav">
                <button className="testi-btn" onClick={prevSlide}>
                  <img src={left_arrow} alt="prev" />
                </button>
                <div className="testi-dots">
                  {blogs.map((_, i) => (
                    <span
                      key={i}
                      className={`testi-dot ${i === active ? "active" : ""}`}
                      onClick={() => setActive(i)}
                    ></span>
                  ))}
                </div>
                <button className="testi-btn" onClick={nextSlide}>
                  <img src={right_arrow} alt="next" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="testi-right"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {blogs.map((_, i) => {
              // circular indexing for infinite loop
              const index = (active + i) % blogs.length;

              return (
                <div
                  key={i}
                  className={`testi-card-wrapper ${
                    i === 0 ? "active-wrapper" : "inactive-wrapper"
                  }`}
                >
                  <img
                    src={blogs[index].img}
                    alt=""
                    className="testi-card-img"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <img src={testi_blur} alt="" className="testi-blur" /> */}
      </div>
    </section>
  );
};

export default Testimonial;
