/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  solidButton,
  className,
  divClassName,
  text = "Rent",
}) => {
  return (
    <div className={`frame ${solidButton} ${className}`}>
      <div className={`rent ${divClassName}`}>{text}</div>
    </div>
  );
};

Frame.propTypes = {
  solidButton: PropTypes.oneOf(["solid-button", "disabled", "outline-button"]),
  text: PropTypes.string,
};
