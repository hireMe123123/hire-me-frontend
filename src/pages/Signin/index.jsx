/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";
/* IMPORT AXIOS */
import axios from "../../utils/axios";

/* IMPORT IMAGE */
/* React Function */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("idUser", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.msg);
      navigate("/");
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
          <div className="col-sm-6 cnt-image d-flex justify-content-center align-items-center">
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
          <div className="col-sm-6 cnt-form d-flex justify-content-start align-items-center">
            <header>
              <div className="container-auth-right">
                <h1 className="container-title">Halo, Pewpeople</h1>
                <p className="text-container">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor
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
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Masukan alamat sandi"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h5 className="d-flex justify-content-end">Lupa kata sandi?</h5>
                <button
                  className="btn btn-warning in-button"
                  onClick={handleLogin}
                >
                  Masuk
                </button>
                <h4 className="d-flex justify-content-center account-check">
                  Anda belum punya akun? <a href="#"> Daftar disini</a>
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
