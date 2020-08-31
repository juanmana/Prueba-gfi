import React from "react";
import'./Label.css'

export const Label = ({text}) => {
  return (
    <div>
      <label className="label-text">{text}</label>
    </div>
  );
};
