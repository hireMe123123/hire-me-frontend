/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";

/* IMPORT IMAGE */
/* React Function */
// import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPasswordUser } from "../../stores/actions/forgotPasswordUser";

export default function ForgotPassword() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
  });
  // const handleNavigate = (nav) => {
  //   navigate(`/${nav}`);
  // };

  const handleForgotPasswordUser = () => {
    dispatch(forgotPasswordUser(form))
      .then((response) => {
        alert(response.value.data.message);
      })
      .catch((error) => alert(error));
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* START MAIN */}
      <main className="container-auth">
        <div className="row row-auth">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
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
          <div className="col-md-6 col-sm-12 d-flex justify-content-start align-items-center">
            <header className="right-side">
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
                <div className="d-grid">
                  <button
                    className="btn btn-warning in-button"
                    onClick={handleForgotPasswordUser}
                  >
                    Send password reset email
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </main>
      {/* END MAIN */}
    </>
  );
}
