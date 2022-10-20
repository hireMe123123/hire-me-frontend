/* eslint-disable react/jsx-key */
import React from "react";
import "./card.css";
import profilePic from "../../assets/img/profile_image_dummy.jpg";
import pinLocation from "../../assets/img/pin__location__icon.svg";

export default function Card({ name, skills }) {
  return (
    <>
      <div className="card">
        <div className="card__profile">
          <img src={profilePic} alt="Profile Picture" />
        </div>
        <div className="profile__detail">
          <p
            className="font-weight-bold "
            style={{ fontSize: "20px", cursor: "pointer" }}
          >
            {name}
          </p>
          <p className="text-muted">Web Developer</p>
          <p className="text-muted">
            <img src={pinLocation} alt="location" />
            <span className="ml-2">Address not Set</span>
          </p>
          <div className="card__skills">
            {skills?.length > 0 ? (
              skills.map((skill) => <div className="card__skill">{skill}</div>)
            ) : (
              <p className="text-muted">No Skill Includes</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
