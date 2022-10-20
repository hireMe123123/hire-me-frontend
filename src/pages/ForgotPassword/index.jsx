/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";

/* IMPORT IMAGE */
/* React Function */
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import React from "react";
/* IMPORT AXIOS */
import axios from "../../utils/axios";

export default function ForgotPassword() {
  const [form, setForm] = useState({
    email: "",
  });

  const handleForgot = async () => {
    try {
      const result = await axios.post("auth/forgotPassword", form);
      alert(result.data.msg);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* START MAIN */}
      <main className="container-auth">
        <div className="row row-auth">
          <div className="col-sm-6 d-flex justify-content-center align-items-center">
            <div className="bg-image">
              <img src={hire} alt="hire" className="hire-image" />
              <div className="mask"></div>
              <div className="text">
                <p>
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-start align-items-center">
            <header>
              <div className="container-auth-right">
                <h1 className="container-title">Reset password</h1>
                <p className="text-container">
                  Enter your user account verified email address and we will
                  send you a password reset link.
                </p>
              </div>
              <div className="auth-form">
                <h6 className="auth-form-text">Email</h6>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Masukan alamat email"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <button
                  className="btn btn-warning in-button"
                  onClick={handleForgot}
                >
                  Send password reset email
                </button>
              </div>
            </header>
          </div>
        </div>
      </main>
      {/* END MAIN */}
    </>
  );
}
