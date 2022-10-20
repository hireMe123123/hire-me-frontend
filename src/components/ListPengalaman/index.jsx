import React from "react";
import noPhoto from "../../assets/img/no-photo.png";

export default function ListPengalaman() {
  return (
    <div className="bg-white">
      <div className="row ">
        <div className="col-2">
          <img src={noPhoto} alt="" className="w-100" />
        </div>
        <div className="col-10">
          <div className="fw-bold text-dark">Engineer</div>
          <div className="text-muted">Tokopedia</div>
          <div className="text-muted">July 2019 - January 2020 6 Months</div>
          <div className="text-muted mt-3">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
