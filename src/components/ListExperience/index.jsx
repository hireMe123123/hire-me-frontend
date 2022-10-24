import React from "react";
import "./index.css";

export default function ListPengalaman(props) {
  return (
    <div className="bg-white">
      <div className="row ">
        {/* <div className="col-3">
          <img src={props.image} alt="" className="w-100" />
        </div> */}
        <div className="col-12 pb-3">
          <div className="position-text">{props.dataExperience.position}</div>
          <div className="text-muted">{props.dataExperience.company}</div>
          <div className="text-muted">
            {props.dataExperience.entryDate
              ? props.dataExperience.entryDate
              : "-"}{" "}
            {" - "}
            {props.dataExperience.exitDate
              ? props.dataExperience.exitDate
              : "Present"}
          </div>
          <div className="text-muted mt-3">
            {" "}
            {props.dataExperience.description}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
