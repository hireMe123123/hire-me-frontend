/* eslint-disable react/jsx-key */
import React from "react";
import "./card.css";
// import profilePic from "../../assets/img/profile_image_dummy.jpg";
import pinLocation from "../../assets/img/pin__location__icon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDataUserById } from "../../stores/actions/user";
import { getDataPortofolioByUserId } from "../../stores/actions/portofolio";
import { getDataExperienceByUserId } from "../../stores/actions/experience";
import { getDataSkillByUserId } from "../../stores/actions/skill";

export default function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/user-profile`);
    dispatch(getDataUserById(props.userId));
    dispatch(getDataSkillByUserId(props.userId));
    dispatch(getDataExperienceByUserId(props.userId));
    dispatch(getDataPortofolioByUserId(props.userId));
  };

  return (
    <>
      <div className="card" onClick={handleNavigate}>
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
