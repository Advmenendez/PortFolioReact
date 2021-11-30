import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h1 className="name">{item.name}</h1>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;