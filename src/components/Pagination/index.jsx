import React from "react";
import "./pagination.css";
import left from "../../assets/img/pagination_left.svg";
import right from "../../assets/img/pagination_right.svg";

export default function Pagination() {
  return (
    <>
      <div className="pagination">
        <div className="d-flex pagination__page">
          <img src={left} className="m-auto" alt="toleft" />
        </div>
        <div className="d-flex pagination__page active">
          <p className="m-auto font-weight-bold">1</p>
        </div>
        <div className="d-flex pagination__page">
          <p className="m-auto font-weight-bold">2</p>
        </div>
        <div className="d-flex pagination__page">
          <p className="m-auto font-weight-bold">3</p>
        </div>
        <div className="d-flex pagination__page">
          <img src={right} className="m-auto" alt="toright" />
        </div>
      </div>
    </>
  );
}
