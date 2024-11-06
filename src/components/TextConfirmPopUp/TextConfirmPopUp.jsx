import React from "react";
import { X } from "./X";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="dialog">
            <div className="content">
              <div className="message">{""}</div>
            </div>

            <p className="title">The Organization has been Rejected</p>

            <button className="button">
              <div className="label">Confirm</div>
            </button>
          </div>

          <X className="x-instance" />
        </div>
      </div>
    </div>
  );
};
