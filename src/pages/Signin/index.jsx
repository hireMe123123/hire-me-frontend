/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";

/* IMPORT IMAGE */
import logo from "../../assets/img/logo.png";

/* React Function */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { login } from "../../stores/actions/auth";
import { useDispatch } from "react-redux";
import { getDataUserById } from "../../stores/actions/user";
import { getDataExperienceByUserId } from "../../stores/actions/experience";
import { getDataPortofolioByUserId } from "../../stores/actions/portofolio";
import { getDataSkillByUserId } from "../../stores/actions/skill";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  const handleLogin = () => {
    dispatch(login(form))
      .then((response) => {
        alert(response.value.data.message);
        dispatch(getDataUserById(response.value.data.data.userId));
        dispatch(getDataSkillByUserId(response.value.data.data.userId));
        dispatch(getDataExperienceByUserId(response.value.data.data.userId));
        dispatch(getDataPortofolioByUserId(response.value.data.data.userId));
        localStorage.setItem("token", response.value.data.data.token);
        navigate("/");
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
                <img
                  src={logo}
                  alt="Logo"
                  height={35}
                  className="mb-5"
                  onClick={() => handleNavigate("")}
                />
                <br />
                <h1 className="full-text container-title">Halo, Pewpeople</h1>
                <h1 className="short-text container-title">Signin</h1>
                <p className="full-text text-container">
                  Selamat datang Pewpeople, Masukan email dan kata sandi untuk
                  segera terhubung <br /> dengan perusahaan impian mu
                </p>
                <p className="short-text text-container">
                  Selamat datang Pewpeole, masukan email dan kata sandi
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
                <h6 className="auth-form-text">Kata Sandi</h6>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Masukan alamat sandi"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <div className="d-flex justify-content-end">
                  <button
                    className="click-me"
                    onClick={() => handleNavigate("forgot-password")}
                  >
                    Lupa kata sandi?
                  </button>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-warning in-button"
                    onClick={handleLogin}
                  >
                    Masuk
                  </button>
                </div>
                <h4 className="d-flex justify-content-center account-check">
                  Anda belum punya akun?{" "}
                  <button
                    className="click-me"
                    onClick={() => handleNavigate("signup")}
                  >
                    Daftar disini
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
