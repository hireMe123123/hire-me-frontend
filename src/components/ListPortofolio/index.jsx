import React from "react";
// import noPhoto from "../../assets/img/no-photo.png";

export default function ListPortofolio(props) {
  return (
    <>
      {/* <div className="d-flex gap-5 bg-white text-dark"> */}
      <div className="col-3 ">
        <img src={props.image} alt="" className="w-100 rounded-3" />
        <div className="h6 text-center mt-2">{props.title}</div>
      </div>
      {/* </div> */}
    </>
  );
}
