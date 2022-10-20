/* IMPORT CSS */
import "./index.css";
import hire from "../../assets/img/hireme.png";

/* IMPORT IMAGE */
/* React Function */
// import { useNavigate } from "react-router-dom";
import React from "react";

export default function Signup() {
  return (
    <>
      {/* START MAIN */}
      <main>
        <div className="row">
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
              <div className="container-signup">
                <h1 className="container-title">Halo, Pewpeople</h1>
                <p className="text-container">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor
                </p>
              </div>
              <div className="signin-form">
                <h7 className="signin-form-text">Nama</h7>
                <input
                  type="text"
                  className="form-control"
                  name="nama"
                  placeholder="Masukan nama panjang"
                />{" "}
                <br />
                <h7 className="signin-form-text">Email</h7>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Masukan alamat email"
                />{" "}
                <br />
                <h7 className="signin-form-text">No handphone</h7>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Masukan no handphone"
                />{" "}
                <br />
                <h7 className="signin-form-text">Kata sandi</h7>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Masukan alamat sandi"
                />{" "}
                <br />
                <h7 className="signin-form-text">Konfirmasi kata sandi</h7>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Masukan konfirmasi kata sandi"
                />{" "}
                <br />
                <button className="btn btn-warning in-button">Daftar</button>
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
