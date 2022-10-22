/* eslint-disable react/jsx-key */
import React from "react";
import "./card.css";
// import profilePic from "../../assets/img/profile_image_dummy.jpg";
import pinLocation from "../../assets/img/pin__location__icon.svg";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card__profile">
          <img
            src={
              props.image
                ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${props.image}`
                : `https://ui-avatars.com/api/?name=${props.name}&background=random&size=44`
              //   : profilePic
            }
            alt="Profile Picture"
          />
        </div>
        <div className="profile__detail">
          <p
            className="font-weight-bold "
            style={{ fontSize: "20px", cursor: "pointer" }}
          >
            {props.name}
          </p>
          <p className="text-muted">
            {props.job ? props.job : "Web Developer"} -{" "}
            {props.jobType ? props.jobType : "Fulltime"}
          </p>
          <p className="text-muted">
            <img
              src={pinLocation}
              alt="location"
              style={{ marginRight: "5px" }}
            />
            <span className="ml-2">
              {props.location ? props.location : "Address Not Set"}
            </span>
          </p>
          <div className="card__skills">
            {props.skills?.length > 0 ? (
              props.skills.map((skill) => (
                <div className="card__skill">{skill.skill}</div>
              ))
            ) : (
              <p className="text-muted">No Skill Includes</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
