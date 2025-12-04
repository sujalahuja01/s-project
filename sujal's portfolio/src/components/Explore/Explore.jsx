import React from "react";
import "./Explore.css";
// import crystal from "@/assets/crystal.svg";

const Explore = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-left">
          <h2 className="cta-heading">Have Any Projects In Mind?</h2>
          <h2 className="cta-heading">Get In Touch</h2>

          <button className="cta-btn">Explore More</button>
        </div>

        <div className="cta-right">
          {/* <img src={crystal} alt="icon" className="cta-icon" /> */}
        </div>
      </div>
    </section>
  );
};

export default Explore;
