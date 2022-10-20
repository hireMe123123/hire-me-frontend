import React from "react";
import noPhoto from "../../assets/img/no-photo.png";

export default function ListPortofolio() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-evenly gap-5">
        <div className="col ">
          <img src={noPhoto} alt="" className="w-100 rounded-3" />
          <div className="h6 text-center mt-2">Portofolio App</div>
        </div>
        <div className="col ">
          <img src={noPhoto} alt="" className="w-100 rounded-3" />
          <div className="h6 text-center mt-2">Portofolio App</div>
        </div>
        <div className="col ">
          <img src={noPhoto} alt="" className="w-100 rounded-3" />
          <div className="h6 text-center mt-2">Portofolio App</div>
        </div>
      </div>
    </div>
  );
}
