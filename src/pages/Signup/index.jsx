/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";

/* IMPORT IMAGE */
/* React Function */
// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "../../utils/axios";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  console.log(form);

  const handleSignup = async () => {
    try {
      const result = await axios.post("auth/register", form);
      alert(result.data.message);
    } catch (error) {
      alert(error.response.data.message);
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
              <div className="container-auth-signup">
                <h1 className="container-title">Halo, Pewpeople</h1>
                <p className="text-container">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor
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
                <h6 className="auth-form-text">No handphone</h6>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Masukan no handphone"
                  onChange={handleChangeForm}
                />{" "}
                <br />
                <h6 className="auth-form-text">Kata sandi</h6>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Masukan alamat sandi"
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
                <button
                  className="btn btn-warning in-button"
                  onClick={handleSignup}
                >
                  Daftar
                </button>
                <h4 className="d-flex justify-content-center account-check">
                  Anda sudah punya akun? <a href="#"> Masuk disini</a>
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
