import React, { useState, useRef, useEffect } from "react";
import "./Testimonials.css";
import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";
import quote from "@/assets/quote.svg";

import { blogs } from "../../utils/content.js"; // uses your blogs array

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const cardRefs = useRef([]);

  // ensure ref array length matches blogs
  cardRefs.current = [];
  const setCardRef = (el) => {
    if (el) cardRefs.current.push(el);
  };

  // when active changes, scroll the active card into center view
  useEffect(() => {
    const el = cardRefs.current[0]; // we render rotated order below; index 0 is active
    if (el && el.scrollIntoView) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  const nextSlide = () => setActive((s) => (s + 1) % blogs.length);
  const prevSlide = () =>
    setActive((s) => (s - 1 + blogs.length) % blogs.length);

  // Touch handlers for mobile
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (touchStartX.current - endX > 40) nextSlide();
    if (endX - touchStartX.current > 40) prevSlide();
  };

  // Build rotated display order so active is first (i === 0)
  const displayOrder = blogs.map((_, i) => blogs[(active + i) % blogs.length]);

  return (
    <section className="testi">
      <div className="testi-container">
        <p className="testi-label">Testimonial</p>
        <h2 className="testi-title">
          What My <span>Clients</span> Say
        </h2>

        <div className="testi-content">
          {/* TEXT — stays above on small screens */}
          <div className="testi-left">
            <img src={quote} alt="" className="testi-quote" />
            <h4 className="testi-name">Leslie Alexander</h4>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-desc">{blogs[active].description}</p>
          </div>

          {/* CAROUSEL */}
          <div
            className="testi-right"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {displayOrder.map((item, i) => (
              <div
                key={i}
                ref={setCardRef}
                className={`testi-card ${
                  i === 0 ? "active-card" : "small-card"
                }`}
                aria-hidden={i === 0 ? "false" : "true"}
              >
                {/* keep image as provided (no width/height forced) */}
                <img
                  src={item.img}
                  alt={`slide-${i}`}
                  className="testi-card-img"
                />
              </div>
            ))}
          </div>

          {/* CONTROLS (below images on mobile; to the right on desktop via CSS order) */}
          <div className="testi-controls">
            <div className="testi-nav">
              <button
                className="testi-btn"
                onClick={prevSlide}
                aria-label="previous"
              >
                <img src={leftArrow} alt="left" />
              </button>
              <button
                className="testi-btn"
                onClick={nextSlide}
                aria-label="next"
              >
                <img src={rightArrow} alt="right" />
              </button>
            </div>

            <div className="testi-dots">
              {blogs.map((_, idx) => (
                <button
                  key={idx}
                  className={`testi-dot ${idx === active ? "active" : ""}`}
                  onClick={() => setActive(idx)}
                  aria-label={`go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
