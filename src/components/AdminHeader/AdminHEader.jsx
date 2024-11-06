import React from "react";
import fullLogoGradinat2 from "./full-logo-gradinat-2.png";
import image from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector from "./vector.svg";

export const Box = () => {
  return (
    <div className="box">
      <div className="navbar">
        <img
          className="full-logo-gradinat"
          alt="Full logo gradinat"
          src={fullLogoGradinat2}
        />

        <div className="text-wrapper">Pending Requests</div>

        <div className="div">Create Event</div>

        <div className="text-wrapper-2">Organizations</div>

        <div className="text-wrapper-3">Opportunities</div>

        <div className="text-wrapper-4">Sign out</div>

        <div className="overlap-group">
          <img className="vector" alt="Vector" src={vector} />

          <img className="img" alt="Vector" src={image} />

          <img className="vector-2" alt="Vector" src={vector2} />
        </div>
      </div>
    </div>
  );
};
