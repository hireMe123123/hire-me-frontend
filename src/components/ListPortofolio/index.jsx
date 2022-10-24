import React from "react";

export default function ListPortofolio(props) {
  const imagePortofolio = ` https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${props.dataPortofolio.image}`;

  return (
    <>
      <div className="col-10 ">
        <img src={imagePortofolio} alt="" className="w-100 rounded-3" />
        <div className="h6 text-center mt-2">
          {props.dataPortofolio.projectName}{" "}
        </div>
      </div>
    </>
  );
}
