import React from "react";
import noPhoto from "../../assets/images/no-photo.png";
import ListPortofolio from "../../components/ListPortofolio";
import ListPengalaman from "../../components/ListPengalaman";

export default function UserProfile() {
  return (
    <div className="py-5">
      <div className="container-fluid">
        <div className="container">
          <div className="d-flex flex-row">
            <div className="col-4 border rounded rounded-3 me-4">
              <div className="px-4 py-5">
                <div className="text-center mb-5">
                  <img src={noPhoto} alt="" className="w-50 rounded-pill" />
                </div>
                <div className="fw-bold h4">Louis Tomlinson</div>
                <div className="fw-bold">Web Developer</div>
                <div className="text-muted">London, UK</div>
                <div className="text-muted mb-3">0812-3456-7889</div>
                <div className="text-muted mb-4">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <button className="btn w-100 btn-primary mb-4">Hire</button>
                <div className="fw-bold h5">Skill</div>
                <div className="text-muted">louistommo@gmail.com</div>
                <div className="text-muted">@Louis91</div>
                <div className="text-muted">@Louistomma</div>
                <div className="text-muted">@Louistomma</div>
              </div>
            </div>

            <div className="col-8 border rounded-3 ">
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
                    className="tab-pane fade show active mt-3"
                    id="portofolio"
                    role="tabpanel"
                    aria-labelledby="portofolio-tab"
                  >
                    <ListPortofolio />
                  </div>
                  <div
                    className="tab-pane fade mt-3"
                    id="userExperience"
                    role="tabpanel"
                    aria-labelledby="userExperience-tab"
                  >
                    <ListPengalaman />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
