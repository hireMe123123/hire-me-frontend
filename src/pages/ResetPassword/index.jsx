/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";
/* IMPORT AXIOS */
import axios from "../../utils/axios";

/* IMPORT IMAGE */
/* React Function */
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import React from "react";

export default function ResetPassword() {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleReset = async () => {
    try {
      const result = await axios.post("auth/resetPassword/OTPReset", form);
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
                <p className="text-p">
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
                  You need to change your password to activate your account
                </p>
              </div>
              <div className="auth-form">
                <h6 className="auth-form-text">Kata sandi</h6>
                <input
                  type="text"
                  className="form-control"
                  name="newPassword"
                  placeholder="Masukan kata sandi"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">Confirmation new password</h6>
                <input
                  type="text"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Masukan konfirmasi kata sandi"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <button
                  className="btn btn-warning in-button"
                  onChange={handleReset}
                >
                  Reset Password
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