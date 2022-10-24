import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mailIcon from "../../assets/img/icons/mail-icon.png";
import phoneIcon from "../../assets/img/icons/phone-icon.png";
import linkedinIcon from "../../assets/img/icons/linkedin-icon.png";
import instagramIcon from "../../assets/img/icons/instagram-icon.png";
import "./index.css";

import { useSelector } from "react-redux";

export default function CompanyProfile() {
  const company = useSelector((state) => state.company);

  const imageCompany = `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${company.data[0].image}`;

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
                    src={imageCompany}
                    alt=""
                    className="w-25 rounded-circle mb-5"
                  />
                  <div className="h4">{company?.data[0]?.name}</div>
                  <div className="h6">{company?.data[0]?.field}</div>
                  <div className="text-muted mb-5">
                    {company?.data[0]?.location}
                  </div>
                  <div className="text-muted text-center mb-5">
                    {company?.data[0]?.description
                      ? company?.data[0]?.description
                      : "Lorem Ipsum dolat sit amet, consectetur adipiscing elit. Nullam auctor, nunc vel ultricies luctus, nunc nisl aliquet nunc, vel lacinia nisl lorem vel nisl. Nullam auctor, nunc vel ultricies luctus, nunc nisl aliquet nunc, vel lacinia nisl lorem vel nisl."}
                  </div>
                  <button className="btn btn-primary w-50 mb-5">
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
                        {company?.data[0]?.email}
                      </div>
                      <div className="text-muted mb-3">
                        {company?.data[0]?.instagram}
                      </div>
                      <div className="text-muted mb-3">
                        {company?.data[0]?.phonenumber}
                      </div>
                      <div className="text-muted mb-3">
                        {company?.data[0]?.linkedin}
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
    </div>
  );
}
