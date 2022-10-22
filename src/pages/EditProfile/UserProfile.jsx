import React, { useState } from "react";
// import people from "../../assets/img/img-opinion3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataUserById,
  updateDataUser,
  updateUserImage,
} from "../../stores/actions/user";
import {
  createExperience,
  getDataExperienceByUserId,
} from "../../stores/actions/experience";
import {
  createPortofolio,
  getDataPortofolioByUserId,
} from "../../stores/actions/portofolio";

export default function EditProfileUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const dataUser = user.data[0];
  const [userData, setUserData] = useState(dataUser);
  const [experience, setExperience] = useState({ userId: dataUser?.userId });
  const [portofolio, setPortofolio] = useState({ userId: dataUser?.userId });
  const [newImage, setNewImage] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const lengthImage = Object.keys(newImage).length;
  // console.log(imagePreview);

  const inputData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const inputExperience = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const inputPortofolio = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setPortofolio({ ...portofolio, [name]: files[0] });
    } else {
      setPortofolio({ ...portofolio, [name]: value });
    }
  };

  const handleInputImage = (e) => {
    const { name, files } = e.target;
    setNewImage({ [name]: files[0] });
    setImagePreview(URL.createObjectURL(files[0]));
  };

  const handleUpdateDataUser = () => {
    dispatch(updateDataUser(dataUser.userId, userData)).then(() => {
      dispatch(getDataUserById(dataUser.userId));
    });
  };

  const handleCreateExperience = () => {
    dispatch(createExperience(experience)).then(() => {
      dispatch(getDataExperienceByUserId(dataUser.userId));
    });
  };

  const handleCreatePortofolio = () => {
    const formData = new FormData();
    for (const data in portofolio) {
      formData.append(data, portofolio[data]);
    }
    dispatch(createPortofolio(formData)).then(() => {
      getDataPortofolioByUserId(dataUser.userId);
    });
  };

  const handleUpdateImage = () => {
    const imageData = new FormData();
    imageData.append("image", newImage.image);
    dispatch(updateUserImage(dataUser.userId, imageData));
  };

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
                    {user.isLoading ? (
                      <h1>Loading</h1>
                    ) : (
                      <div
                        className="py-5 border rounded rounded-3 bg-white"
                        style={{ padding: "0px 30px" }}
                      >
                        <div className="text-center mb-3">
                          <img
                            src={
                              lengthImage > 0
                                ? imagePreview
                                : dataUser.image
                                ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${dataUser.image}`
                                : "https://res.cloudinary.com/dra4ha50q/image/upload/v1665756702/Wainscot-Event-Organizing/User/default-profile_tw4rl0.png"
                            }
                            alt=""
                            className="w-50 rounded-pill"
                          />
                        </div>
                        <div className="text-center mb-3">
                          <label
                            className="border-0 bg-transparent"
                            htmlFor="image"
                          >
                            <input
                              type="file"
                              name="image"
                              id="image"
                              className="d-none"
                              onChange={handleInputImage}
                            />
                            <div className="d-flex align-items-center color-gray gap-2">
                              <Icon icon={"fa-solid:pen"} />
                              <span className="fs-5">Edit</span>
                            </div>
                          </label>
                        </div>
                        {lengthImage > 0 ? (
                          <div className="text-center mb-5">
                            <button
                              className="button"
                              onClick={handleUpdateImage}
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="fw-semibold color-bold h4">
                          {dataUser.name ? dataUser.name : "Name not inputed"}
                        </div>
                        <div className="color-bold">
                          {dataUser.profession
                            ? dataUser.profession
                            : "Profession not inputed"}
                        </div>
                        <div className="color-gray">
                          {dataUser.typeJob
                            ? dataUser.typeJob
                            : "Type Job not inputed"}
                        </div>

                        <div className="d-flex align-items-center color-gray gap-2 mt-3">
                          <Icon icon={"akar-icons:location"} width="16" />
                          <div className="">
                            {dataUser.domicile
                              ? dataUser.domicile
                              : "Domisili not inputed"}
                          </div>
                        </div>

                        <div className="d-flex align-items-center color-gray gap-2">
                          <Icon icon={"akar-icons:location"} width="16" />
                          <div className="color-gray">
                            {dataUser.phoneNumber
                              ? dataUser.phoneNumber
                              : "Phone number not inputed"}
                          </div>
                        </div>
                        <div className="color-gray mb-4 mt-3">
                          {dataUser.description
                            ? dataUser.description
                            : "Description not inputed"}
                        </div>
                      </div>
                    )}

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

                        <form className="mt-5 d-flex flex-column gap-4">
                          <div className="d-flex flex-column input_style">
                            <label htmlFor="name">Nama Lengkap</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Masukkan nama lengkap"
                              value={userData.name ? userData.name : ""}
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="profession">Job desk</label>
                            <input
                              type="text"
                              id="profession"
                              name="profession"
                              placeholder="Masukkan job desk"
                              value={
                                userData.profession ? userData.profession : ""
                              }
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="typeJob">Type Job</label>
                            <input
                              type="text"
                              id="typeJob"
                              name="typeJob"
                              placeholder="Masukkan tipe job"
                              value={userData.typeJob ? userData.typeJob : ""}
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="domicile">Domisili</label>
                            <input
                              type="text"
                              id="domicile"
                              name="domicile"
                              placeholder="Masukkan domisili"
                              value={userData.domicile ? userData.domicile : ""}
                              onChange={inputData}
                            />
                          </div>

                          <div className="row">
                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="instagram">Instagram</label>
                              <input
                                type="text"
                                id="instagram"
                                name="instagram"
                                placeholder="Masukkan Username IG"
                                value={
                                  userData.instagram ? userData.instagram : ""
                                }
                                onChange={inputData}
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="github">Github</label>
                              <input
                                type="text"
                                id="github"
                                name="github"
                                placeholder="Masukkan Username Github"
                                value={userData.github ? userData.github : ""}
                                onChange={inputData}
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="gitlab">Gitlab</label>
                              <input
                                type="text"
                                id="gitlab"
                                name="gitlab"
                                placeholder="Masukkan Username Gitlab"
                                value={userData.gitlab ? userData.gitlab : ""}
                                onChange={inputData}
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
                              value={
                                userData.description ? userData.description : ""
                              }
                              onChange={inputData}
                            ></textarea>
                          </div>

                          <button
                            className="button_save"
                            type="button"
                            onClick={handleUpdateDataUser}
                          >
                            Simpan
                          </button>
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
                                onChange={inputExperience}
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="position">Posisi</label>
                              <input
                                type="text"
                                id="position"
                                name="position"
                                placeholder="web developer"
                                onChange={inputExperience}
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
                                onChange={inputExperience}
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="exitDate">Tanggal Keluar</label>
                              <input
                                type="date"
                                id="exitDate"
                                name="exitDate"
                                onChange={inputExperience}
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
                              onChange={inputExperience}
                            ></textarea>
                          </div>

                          <hr />

                          <button
                            type="button"
                            className="button color-yellow border-yellow fw-bold"
                            style={{
                              paddingTop: "15px",
                              paddingBottom: "15px",
                            }}
                            onClick={handleCreateExperience}
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
                              onChange={inputPortofolio}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="projectRepo">Link repository</label>
                            <input
                              type="text"
                              id="projectRepo"
                              name="projectRepo"
                              placeholder="Masukkan link repo"
                              onChange={inputPortofolio}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="image">Upload gambar</label>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              className="pb-5"
                              onChange={inputPortofolio}
                            />
                          </div>

                          <hr />

                          <button
                            type="button"
                            className="button color-yellow border-yellow fw-bold"
                            style={{
                              paddingTop: "15px",
                              paddingBottom: "15px",
                            }}
                            onClick={handleCreatePortofolio}
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
