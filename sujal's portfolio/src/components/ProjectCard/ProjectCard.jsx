import React from "react";

const ProjectCard = ({ p }) => {
  return (
    <div className="proj-slider" ref={sliderRef}>
      <div className="proj-card" key={p.id}>
        <div className="proj-img" />
        <h4>{p.title}</h4>
        <p>{p.sub}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
