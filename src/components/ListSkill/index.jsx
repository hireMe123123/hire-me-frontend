import React from "react";
import "./index.css";

export default function CardSkill(props) {
  return (
    <div>
      <button className="btn btn-warning" disabled>
        {props.dataSkill}
      </button>
    </div>
  );
}
