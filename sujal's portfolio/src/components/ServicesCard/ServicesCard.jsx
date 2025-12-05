import React from "react";
import "./ServicesCard.css";
import shapes from "@/assets/service-card-shapes.png";

const ServicesCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <div className="service-card-img-wrapper">
          {/* <img src={shapes} className="shapes-bg" alt="" /> */}
          <img src={service.img} className="service-icon" alt="" />
        </div>

        <h3>
          {service.tech}&nbsp;
          <span className="service-card-span">{service.level}</span>
        </h3>
        <p>{service.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
