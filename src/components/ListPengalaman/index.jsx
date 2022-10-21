import React from "react";
import "./index.css";

export default function ListPengalaman(props) {
  return (
    <div className="bg-white">
      <div className="row ">
        <div className="col-3">
          <img src={props.image} alt="" className="w-100" />
        </div>
        <div className="col-9">
          <div className="position-text">{props.position}</div>
          <div className="text-muted">{props.company}</div>
          <div className="text-muted">
            {props.entryDate ? props.entryDate : "-"} {" - "}
            {props.exitDate ? props.exitDate : "Present"}
          </div>
          <div className="text-muted mt-3"> {props.description}</div>
        </div>
        <hr />
      </div>
    </div>
  );
}
