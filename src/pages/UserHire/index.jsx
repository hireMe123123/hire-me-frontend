import React from "react";
import noPhoto from "../../assets/img/no-photo.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import pinIcon from "../../assets/img/icons/pin-icon.png";
import phoneIcon from "../../assets/img/icons/phone-icon.png";
import "./index.css";
import { useSelector } from "react-redux";

export default function UserHire() {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <div>
      {/* Header */}
      <Navbar />
      <div className="bg-light">
        <div className="py-5">
          <div className="container-fluid ">
            <div className="container">
              <div className="d-flex flex-row align-items-start">
                <div className="col-4 border rounded rounded-3 me-4 bg-white">
                  <div className="px-4 py-5">
                    <div className="text-center mb-5">
                      <img src={noPhoto} alt="" className="w-50 rounded-pill" />
                    </div>
                    <div className="fw-bold h4">Louis Tomlinson</div>
                    <div className="fw-bold">Web Developer</div>
                    <small>Freelencer</small>

                    <div className="row my-3">
                      <div className="col-1">
                        <img src={pinIcon} alt="" className="mb-3" />
                        <br />
                        <img src={phoneIcon} alt="" className="" />
                      </div>
                      <div className="col-10">
                        <div className="text-muted mb-2">
                          {" "}
                          Purwokerto, Jawa Tengah
                        </div>
                        <div className="text-muted"> 0812-3456-7889</div>
                      </div>
                    </div>

                    <div className="text-muted mb-4">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <button className="btn w-100 btn-primary mb-4">Hire</button>
                    <div className="fw-bold h5">Skill</div>
                    <div className="text-muted">louistommo@gmail.com</div>
                    <div className="text-muted">@Louis91</div>
                    <div className="text-muted">@Louistomma</div>
                    <div className="text-muted">@Louistomma</div>
                  </div>
                </div>

                <div className="container">
                  <div className="px-4 py-5">
                    <div className="h3 fw-bold">Hubungi Lous Tomlinson</div>
                    <div className="text-muted mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <div>
                      <div className="text-muted mb-1">
                        Tujuan tentang pesan ini
                      </div>
                      <select
                        className="form-select mb-5"
                        aria-label="Default select example"
                      >
                        <option selected>Proyek</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>

                      <div className="text-muted mb-1">
                        Tujuan tentang pesan ini
                      </div>
                      <textarea
                        type="text-area"
                        className="form-control mb-5"
                        placeholder="Deskripsi/ Jelaskan lebih detail!"
                      />
                    </div>

                    <button className="btn btn-warning w-100">Kirim</button>
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
