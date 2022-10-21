import React, { useEffect, useState } from "react";
import noPhoto from "../../assets/img/no-photo.png";
import pinIcon from "../../assets/img/icons/pin-icon.png";
import phoneIcon from "../../assets/img/icons/phone-icon.png";
import mailIcon from "../../assets/img/icons/mail-icon.png";
import instagramIcon from "../../assets/img/icons/instagram-icon.png";
import githubIcon from "../../assets/img/icons/github-icon.png";
import gitlabIcon from "../../assets/img/icons/gitlab-icon.png";
import ListPortofolio from "../../components/ListPortofolio";
import ListExperience from "../../components/ListExperience";
import ListSkill from "../../components/ListSkill";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./index.css";

import { getDataUserById } from "../../stores/actions/user";
import { getDataPortofolioByUserId } from "../../stores/actions/portofolio";
import { getDataExperienceByUserId } from "../../stores/actions/experience";
import { getDataSkillByUserId } from "../../stores/actions/skill";
import { useSelector, useDispatch } from "react-redux";

export default function UserProfile() {
  const userId = "5e57eb9a-61ce-43bf-bd25-a2eb627caaf3";

  const user = useSelector((state) => state.user);
  const portofolio = useSelector((state) => state.portofolio);
  const experience = useSelector((state) => state.experience);
  const skill = useSelector((state) => state.skill);
  const dispatch = useDispatch();

  const [dataPortofolio, setDataPortofolio] = useState([]);
  const [dataExperience, setDataExperience] = useState([]);
  const [dataSkill, setDataSkill] = useState([]);

  useEffect(() => {
    dispatch(getDataUserById(userId));
    dispatch(getDataPortofolioByUserId(userId));
    dispatch(getDataExperienceByUserId(userId));
    dispatch(getDataSkillByUserId(userId));
    setDataPortofolio(portofolio.data.data);
    setDataExperience(experience.data.data);
    setDataSkill(skill.data[0].userSkill);
  }, [userId]);

  console.log(dataSkill);

  return (
    <div>
      {/* Header */}
      <Navbar />
      <div className="background-purple-white">
        <div className="py-5">
          <div className="container-fluid ">
            <div className="container">
              <div className="d-flex flex-row flex-wrap align-items-start gap-5">
                <div className="col-md-4 col-sm-12 border rounded rounded-3 bg-white">
                  <div className="px-4 py-5">
                    <div className="text-center mb-5">
                      <img src={noPhoto} alt="" className="w-50 rounded-pill" />
                    </div>
                    <div className="fw-bold h4">{user.data[0].name}</div>
                    <div className="fw-bold mb-4">
                      {user.data[0].profession
                        ? user.data[0].profession
                        : "No Data"}
                    </div>
                    <div className="text-muted mb-3">
                      <img src={pinIcon} alt="" className="icons" />
                      {user.data[0].domicile
                        ? user.data[0].domicile
                        : "No Data"}
                    </div>
                    <div className="text-muted mb-3">
                      <img src={phoneIcon} alt="" className="icons" />{" "}
                      {user.data[0].phoneNumber
                        ? user.data[0].phoneNumber
                        : "-"}
                    </div>
                    <div className="text-muted mb-4">
                      {user.data[0].description
                        ? user.data[0].description
                        : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea saepe sit ea fuga quisquam architecto atque nostrum minus facilis repellendus laboriosam beatae ut dolor aspernatur! Aliquam labore at beatae. Ut cupiditate quaerat aperiam delectus impedit neque officiis repellat iure sit animi nulla natus tension! Eaque totam error occaecati, quaerat itaque nostrum. Sequi rerum voluptate eveniet necessitatibus."}
                    </div>
                    <button className="btn w-100 background-purple mb-4 text-white">
                      Hire
                    </button>
                    <div className="fw-bold h5">Skill</div>
                    <div className="d-flex flex-row flex-wrap gap-2 text-dark mb-3">
                      {dataSkill.length > 0 ? (
                        dataSkill.map((item) => (
                          <div key={item.id}>
                            <ListSkill dataSkill={item} />
                          </div>
                        ))
                      ) : (
                        <div className="text-center">
                          <h1>You have not any Skill uploaded</h1>
                        </div>
                      )}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={mailIcon} alt="" className="icons" />
                      {user.data[0].email ? user.data[0].email : "-"}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={instagramIcon} alt="" className="icons" />
                      {user.data[0].instagram ? user.data[0].instagram : "-"}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={githubIcon} alt="" className="icons" />
                      {user.data[0].github ? user.data[0].github : "-"}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={gitlabIcon} alt="" className="icons" />{" "}
                      {user.data[0].gitlab ? user.data[0].gitlab : "-"}
                    </div>
                  </div>
                </div>

                <div className="col-md-7 col-sm-12 border rounded-3 bg-white">
                  <div className="px-4 py-5">
                    <ul className="nav nav-pills" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active-custom"
                          id="portofolio-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#portofolio"
                          type="button"
                          role="tab"
                          aria-controls="portofolio"
                          aria-selected="true"
                        >
                          Portofolio
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="userExperience-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#userExperience"
                          type="button"
                          role="tab"
                          aria-controls="userExperience"
                          aria-selected="false"
                        >
                          Pengalaman Kerja
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active mt-3 "
                        id="portofolio"
                        role="tabpanel"
                        aria-labelledby="portofolio-tab"
                      >
                        {/* Map listPortofolio */}
                        <div className="row bg-white ">
                          <div className="d-flex flex-row flex-wrap justify-content-space text-dark">
                            {dataPortofolio.length > 0 ? (
                              dataPortofolio.map((item) => (
                                <div key={item.id} className="col-6">
                                  <ListPortofolio dataPortofolio={item} />
                                </div>
                              ))
                            ) : (
                              <div className="text-center">
                                <h1>You have not any portofolio uploaded</h1>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Map listExperience */}
                      <div
                        className="tab-pane fade mt-3"
                        id="userExperience"
                        role="tabpanel"
                        aria-labelledby="userExperience-tab"
                      >
                        {dataExperience.length > 0 ? (
                          dataExperience.map((item) => (
                            <div key={item.id}>
                              <ListExperience dataExperience={item} />
                            </div>
                          ))
                        ) : (
                          <div className="text-center">
                            <h1>You have not any Experience uploaded</h1>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
