import React from "react";
import "./style.css";

export const Dialog = () => {
  return (
    <div className="dialog">
      <div className="content">
        <div className="title">Delete Organization?</div>

        <p className="message">This action is not reversible.</p>
      </div>

      <div className="actions">
        <button className="button">
          <div className="label">Cancel</div>
        </button>

        <button className="label-wrapper">
          <div className="text-wrapper">Delete</div>
        </button>
      </div>
    </div>
  );
};
