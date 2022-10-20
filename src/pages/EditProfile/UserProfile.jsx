import React from "react";
import people from "../../assets/img/img-opinion3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

export default function EditProfileUser() {
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
                        Louis Tomlinson
                      </div>
                      <div className="color-bold">Web Developer</div>
                      <div className="color-gray">Freelancer</div>

                      <div className="d-flex align-items-center color-gray gap-2 mt-3">
                        <Icon icon={"akar-icons:location"} width="16" />
                        <div className="">London, UK</div>
                      </div>

                      <div className="d-flex align-items-center color-gray gap-2">
                        <Icon icon={"akar-icons:location"} width="16" />
                        <div className="color-gray">0812 - 3456 - 7889</div>
                      </div>
                      <div className="color-gray mb-4 mt-3">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-3 mt-4">
                      <button className="button button_base fw-bold background-purple text-white">
                        Ubah Password
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
                            <label htmlFor="name">Nama Lengkap</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Masukkan nama lengkap"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="profession">Job desk</label>
                            <input
                              type="text"
                              id="profession"
                              name="profession"
                              placeholder="Masukkan job desk"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="typeJob">Type Job</label>
                            <input
                              type="text"
                              id="typeJob"
                              name="typeJob"
                              placeholder="Masukkan tipe job"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="domisili">Domisili</label>
                            <input
                              type="text"
                              id="domisili"
                              name="domisili"
                              placeholder="Masukkan domisili"
                            />
                          </div>

                          <div className="row">
                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="instagram">Instagram</label>
                              <input
                                type="text"
                                id=""
                                name="instagram"
                                placeholder="Masukkan Username IG"
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="github">Github</label>
                              <input
                                type="text"
                                id="github"
                                name="github"
                                placeholder="Masukkan Username Github"
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="gitlab">Gitlab</label>
                              <input
                                type="text"
                                id="gitlab"
                                name="gitlab"
                                placeholder="Masukkan Username Gitlab"
                              />
                            </div>
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

                          <button className="button_save">Simpan</button>
                        </form>
                      </div>
                    </div>

                    <div className="container border rounded-3 bg-white">
                      <div className="mx-4 py-5">
                        <div className="fw-semibold color-bold h4 mb-4">
                          Skill
                        </div>
                        <hr style={{ margin: "0 -35px" }} />

                        <form
                          action=""
                          className="mt-5 d-flex flex-column gap-4"
                        >
                          <div className="d-flex input_style gap-5">
                            <input
                              type="text"
                              id="skillName"
                              name="skillName"
                              placeholder="Java"
                              className="w-100"
                            />
                            <button className="button_save">Simpan</button>
                          </div>

                          <div className="button button-list-skill text-white text-start d-flex align-items-center justify-content-between">
                            <span>Phyton</span>
                            <div className="d-flex gap-1">
                              <button className="button p-0 text-white">
                                <Icon icon={"la:pen"} width={"15"} />
                              </button>
                              <button className="button p-0 text-white">
                                <Icon icon={"bi:trash"} width={"15"} />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="container border rounded-3 bg-white">
                      <div className="mx-4 py-5">
                        <div className="fw-semibold color-bold h4 mb-4">
                          Pengalaman kerja
                        </div>
                        <hr style={{ margin: "0 -35px" }} />

                        <form
                          action=""
                          className="mt-5 d-flex flex-column gap-4"
                        >
                          <div className="row">
                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="company">Nama Perusahaan</label>
                              <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="PT Apa Saja"
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="position">Posisi</label>
                              <input
                                type="text"
                                id="position"
                                name="position"
                                placeholder="web developer"
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="entryDate">Tanggal Masuk</label>
                              <input
                                type="date"
                                id="entryDate"
                                name="entryDate"
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="exitDate">Tanggal Keluar</label>
                              <input
                                type="date"
                                id="exitDate"
                                name="exitDate"
                              />
                            </div>
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

                          <hr />

                          <button
                            className="button color-yellow border-yellow fw-bold"
                            style={{
                              paddingTop: "15px",
                              paddingBottom: "15px",
                            }}
                          >
                            Tambah pengalaman kerja
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="container border rounded-3 bg-white">
                      <div className="mx-4 py-5">
                        <div className="fw-semibold color-bold h4 mb-4">
                          Portfolio
                        </div>
                        <hr style={{ margin: "0 -35px" }} />

                        <form
                          action=""
                          className="mt-5 d-flex flex-column gap-4"
                        >
                          <div className="d-flex flex-column input_style">
                            <label htmlFor="projectName">Nama aplikasi</label>
                            <input
                              type="text"
                              id="projectName"
                              name="projectName"
                              placeholder="Masukkan nama aplikasi"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="projectRepo">Link repository</label>
                            <input
                              type="text"
                              id="projectRepo"
                              name="projectRepo"
                              placeholder="Masukkan link repo"
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="image">Upload gambar</label>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              className="pb-5"
                            />
                          </div>

                          <hr />

                          <button
                            className="button color-yellow border-yellow fw-bold"
                            style={{
                              paddingTop: "15px",
                              paddingBottom: "15px",
                            }}
                          >
                            Tambah portfolio
                          </button>
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
