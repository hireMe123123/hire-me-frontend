import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import noPhoto from "../../assets/img/no-photo.png";
import mailIcon from "../../assets/img/icons/mail-icon.png";
import phoneIcon from "../../assets/img/icons/phone-icon.png";
import linkedinIcon from "../../assets/img/icons/linkedin-icon.png";
import instagramIcon from "../../assets/img/icons/instagram-icon.png";
import "./index.css";

export default function CompanyProfile() {
  return (
    <div>
      <div>
        {/* Header */}
        <Navbar />

        {/* Page content */}
        <div className="container-fluid bg-light">
          <div className="py-5">
            <div className="container background-purple-white py-5 rounded-3">
              <div className="container container-company">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={noPhoto}
                    alt=""
                    className="w-25 rounded-circle mb-5"
                  />
                  <div className="h4">PT. Martabat Jaya Abadi</div>
                  <div className="h6">Financial</div>
                  <div className="text-muted mb-5">Jakarta, Indonesia</div>
                  <div className="text-muted text-center mb-5">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.{" "}
                  </div>
                  <button className="btn btn-primary w-25 mb-5">
                    Edit Profile
                  </button>

                  <div className="row">
                    <div className="col-2">
                      <img src={mailIcon} alt="" className="mb-3" />
                      <img src={instagramIcon} alt="" className="mb-3" />
                      <img src={phoneIcon} alt="" className="mb-3" />
                      <img src={linkedinIcon} alt="" className="mb-3" />
                    </div>
                    <div className="col-10">
                      <div className="text-muted mb-3">
                        martabatjaya@gmail.com
                      </div>
                      <div className="text-muted mb-3">martabat_jaya</div>
                      <div className="text-muted mb-3">0812-3456-7889</div>
                      <div className="text-muted mb-3">Martabat Jaya Abadi</div>
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
    </div>
  );
}
