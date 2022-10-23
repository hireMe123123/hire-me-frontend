/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";

/* IMPORT IMAGE */
import logo from "../../assets/img/logo.png";

/* React Function */
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerCompany } from "../../stores/actions/signupcompany";

export default function SignupCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    field: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
    companyName: "",
  });
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const handleSignupCompany = () => {
    dispatch(registerCompany(form))
      .then((response) => {
        alert(response.value.data.message);
        navigate("/signin-company");
      })
      .catch((error) => alert(error));
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* START MAIN */}
      <main className="container-auth-signup-company">
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
                <img
                  src={logo}
                  alt="Logo"
                  height={35}
                  className="mb-5"
                  onClick={() => handleNavigate("")}
                />
                <h1 className="full-text container-title">Halo, Pewpeople</h1>
                <h1 className="short-text container-title">Signup</h1>
                <p className="full-text text-container">
                  Selamat datang di Peworld. Silahkan isi form berikut untuk
                  tergabung <br /> dalam aplikasi kami
                </p>
                <p className="short-text text-container">
                  Silahkan isi form berikut untuk mendaftar
                </p>
              </div>
              <div className="auth-form">
                <h6 className="auth-form-text">Nama</h6>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Masukan nama panjang"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">Email</h6>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Masukan alamat email"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">Perusahaan</h6>
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  placeholder="Masukan nama perusahaan"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">Bidang Perusahaan</h6>
                <input
                  type="text"
                  className="form-control"
                  name="field"
                  placeholder="Bidang perusahaan anda"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">No handphone</h6>
                <input
                  type="text"
                  className="form-control"
                  name="phonenumber"
                  placeholder="Masukan no handphone"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">Kata sandi</h6>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Masukan kata sandi"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">Konfirmasi kata sandi</h6>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Masukan konfirmasi kata sandi"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <div className="d-grid">
                  <button
                    className="btn btn-warning in-button"
                    onClick={handleSignupCompany}
                  >
                    Daftar
                  </button>
                </div>
                <h4 className="account-check d-flex justify-content-center">
                  Anda sudah punya akun?{" "}
                  <button
                    className="click-me"
                    onClick={() => handleNavigate("signin-company")}
                  >
                    Masuk disini
                  </button>
                </h4>
                <h4 className="account-check d-flex justify-content-center">
                  Atau masuk disini{" "}
                  <button
                    className="click-me"
                    onClick={() => handleNavigate("signin")}
                  >
                    Sebagai pekerja
                  </button>
                </h4>
              </div>
            </header>
          </div>
        </div>
      </main>
      {/* END MAIN */}
    </>
  );
}
