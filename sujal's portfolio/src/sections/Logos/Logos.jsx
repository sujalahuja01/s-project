import React from "react";
import "./Logos.css";
import { logos } from "../../utils/content.js";

const Logos = () => {
  return (
    <section>
      <div className="gradient-bg">
        <div className="logos">
          {logos.map((item, index) => (
            <img key={index} src={item.img} alt={item.name} />
          ))}
        </div>
        <div className="tilte-1"></div>
        <div className="tilte-2"></div>
      </div>
    </section>
  );
};

export default Logos;
