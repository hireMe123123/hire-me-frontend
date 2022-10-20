import React from "react";
import people from "../../assets/img/img-opinion3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

export default function EditProfileCompany() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main style={{ marginBottom: "194px" }}>
        <div className="background-purple-white">
          <div className="py-5">
            <div className="container-fluid ">
              <div className="container">
                <div className="d-flex flex-column flex-xxl-row align-items-start">
                  <div className="col-12 col-xxl-4 me-xxl-4">
                    <div
                      className="py-5 border rounded rounded-3 bg-white"
                      style={{ padding: "0px 30px" }}
                    >
                      <div className="text-center mb-3">
                        <img
                          src={people}
                          alt=""
                          className="w-50 rounded-pill"
                        />
                      </div>
                      <div className="text-center mb-5">
                        <button className="border-0 bg-transparent">
                          <div className="d-flex align-items-center color-gray gap-2">
                            <Icon icon={"fa-solid:pen"} />
                            <span className="fs-5">Edit</span>
                          </div>
                        </button>
                      </div>
                      <div className="fw-semibold color-bold h4">
                        PT. Martabat Jaya Abadi
                      </div>
                      <div className="color-bold">Financial</div>

                      <div className="d-flex align-items-center color-gray gap-2 mt-3">
                        <Icon icon={"akar-icons:location"} width="16" />
                        <div className="">Purwokerto, Jawa Tengah</div>
                      </div>

                      <div className="color-gray mb-4 mt-3">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum erat orci, mollis nec gravida sed, ornare
                        quis urna. Curabitur eu lacus fringilla, vestibulum
                        risus at.
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-3 mt-4">
                      <button className="button button_base fw-bold background-purple text-white">
                        Simpan
                      </button>
                      <button className="button button_base fw-bold border-purple color-purple">
                        Kembali
                      </button>
                    </div>
                  </div>

                  <div className="col-12 col-xxl-8 d-flex flex-column gap-4 mt-5 mt-xxl-0">
                    <div className="container border rounded-3 bg-white">
                      <div className="mx-4 py-5">
                        <div className="fw-semibold color-bold h4 mb-4">
                          Data Diri
                        </div>
                        <hr style={{ margin: "0 -35px" }} />

                        <form
                          action=""
                          className="mt-5 d-flex flex-column gap-4"
                        >
                          <div className="d-flex flex-column input_style">
                            <label htmlFor="name">Nama Perusahaan</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Masukkan nama lengkap"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="field">Bidang</label>
                            <input
                              type="text"
                              id="field"
                              name="field"
                              placeholder="Masukkan bidang perusahaan ex: Financial"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="location">Domisili</label>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              placeholder="Masukkan tipe job"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="description">
                              Deskripsi singkat
                            </label>
                            <textarea
                              name="description"
                              id="description"
                              rows="5"
                              placeholder="Tuliskan deskripsi singkat"
                            ></textarea>
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Masukkan email"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="instagram">Instagram</label>
                            <input
                              type="text"
                              id="instagram"
                              name="instagram"
                              placeholder="Masukkan username IG"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="phoneNumber">Nomor Telepon</label>
                            <input
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              placeholder="Masukkan nomor telepon"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="linkedIn">Linkedin</label>
                            <input
                              type="text"
                              id="linkedIn"
                              name="linkedIn"
                              placeholder="Masukkan nama Linkedin"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
