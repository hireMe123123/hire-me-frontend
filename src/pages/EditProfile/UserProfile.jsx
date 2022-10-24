import React, { useState } from "react";
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
  deleteExperience,
  getDataExperienceByUserId,
  updateExperience,
} from "../../stores/actions/experience";
import {
  createPortofolio,
  deletePortfolio,
  getDataPortofolioByUserId,
  updatePortofolio,
} from "../../stores/actions/portofolio";
import {
  createSkill,
  deleteSkill,
  getDataSkillByUserId,
  updateSkill,
} from "../../stores/actions/skill";
import { Spinner } from "react-bootstrap";
// import ListExperience from "../../components/ListExperience";
import { Modal } from "react-bootstrap";

export default function EditProfileUser() {
  const dispatch = useDispatch();
  const jobType = ["Masukkan tipe job", "Freelance", "Fulltime"];
  const user = useSelector((state) => state.user);
  const skill = useSelector((state) => state.skill);
  const userSkill = skill.loadingGet ? "" : skill.data[0].userSkill;
  const dataUser = user.data[0];
  const [modal, setModal] = useState();
  const [userData, setUserData] = useState(dataUser);
  const dataExperience = useSelector((state) => state.experience);
  const dataPortofolio = useSelector((state) => state.portofolio);
  const [experience, setExperience] = useState({});
  const [portofolio, setPortofolio] = useState({});
  const [inputSkill, setInputSkill] = useState({
    userId: dataUser?.userId,
    skill: "",
  });
  const [updateSkillUser, setUpdateSkillUser] = useState();
  const [newImage, setNewImage] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const lengthImage = Object.keys(newImage).length;

  const handleModal = (modal, data) => {
    switch (modal) {
      case "experience":
        setModal("experience");
        setExperience(data);
        break;
      case "portofolio":
        setModal("portofolio");
        setPortofolio(data);
        break;

      default:
        break;
    }
  };

  const resetForm = (modal) => {
    setModal();
    switch (modal) {
      case "experience":
        setExperience({
          company: "",
          position: "",
          entryDate: "",
          exitDate: "",
          description: "",
        });
        break;
      case "portofolio":
        setPortofolio({
          projectName: "",
          projectRepo: "",
        });
        break;

      default:
        break;
    }
  };

  const inputData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleInputSkill = (e) => {
    const { name, value } = e.target;
    setInputSkill({ ...inputSkill, [name]: value });
  };

  const handleInputUpdateSkill = (e) => {
    const { name, value } = e.target;
    setUpdateSkillUser({ ...updateSkillUser, [name]: value });
  };

  const inputExperience = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const inputPortofolio = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setPortofolio({
        ...portofolio,
        userId: dataUser.userId,
        [name]: files[0],
      });
    } else {
      setPortofolio({ ...portofolio, userId: dataUser.userId, [name]: value });
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

  const handleCreateSkill = () => {
    dispatch(createSkill(inputSkill)).then(() => {
      dispatch(getDataSkillByUserId(dataUser.userId));
      setInputSkill({ userId: dataUser?.userId, skill: "" });
    });
  };

  const handleDeleteSkill = (skillId) => {
    dispatch(deleteSkill(skillId)).then(() => {
      dispatch(getDataSkillByUserId(dataUser.userId));
    });
  };

  const handleUpdateSkill = () => {
    dispatch(
      updateSkill(updateSkillUser.userSkillId, { skill: updateSkillUser.skill })
    ).then(() => {
      dispatch(getDataSkillByUserId(dataUser.userId));
      setUpdateSkillUser("");
    });
  };

  const handleCreateExperience = () => {
    dispatch(createExperience({ ...experience, userId: dataUser.userId })).then(
      () => {
        dispatch(getDataExperienceByUserId(dataUser.userId));
        resetForm("experience");
      }
    );
  };

  const handleUpdateExperience = () => {
    const {
      experienceId,
      company,
      position,
      entryDate,
      exitDate,
      description,
    } = experience;

    const data = { company, position, entryDate, exitDate, description };
    dispatch(updateExperience(experienceId, data)).then(() => {
      dispatch(getDataExperienceByUserId(dataUser.userId));
      resetForm("experience");
    });
  };

  const handleDeleteExperience = (experienceId) => {
    dispatch(deleteExperience(experienceId)).then(() => {
      dispatch(getDataExperienceByUserId(dataUser.userId));
    });
  };

  const handleCreatePortofolio = () => {
    const formData = new FormData();
    for (const data in portofolio) {
      formData.append(data, portofolio[data]);
    }
    dispatch(createPortofolio(formData)).then(() => {
      dispatch(getDataPortofolioByUserId(dataUser.userId));
      resetForm("portofolio");
    });
  };

  const handleUpdatePortofolio = () => {
    const { portofolioId, projectName, projectRepo, image } = portofolio;
    const dataTemp = { projectName, projectRepo, image };
    const formData = new FormData();
    for (const data in dataTemp) {
      formData.append(data, portofolio[data]);
    }
    dispatch(updatePortofolio(portofolioId, formData)).then(() => {
      dispatch(getDataPortofolioByUserId(dataUser.userId));
      resetForm("portofolio");
    });
  };

  const handleDeletePortofolio = (portofolioId) => {
    dispatch(deletePortfolio(portofolioId)).then(() => {
      dispatch(getDataPortofolioByUserId(dataUser.userId));
    });
  };

  const handleUpdateImage = () => {
    const imageData = new FormData();
    imageData.append("image", newImage.image);
    dispatch(updateUserImage(dataUser.userId, imageData)).then(() => {
      dispatch(getDataUserById(dataUser.userId));
    });
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
                      <Spinner animation="border" variant="light" />
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

                    <div
                      className={`${
                        user.isLoading ? "d-none" : "d-flex"
                      } flex-column gap-3 mt-4`}
                    >
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
                            <select
                              id="typeJob"
                              name="typeJob"
                              value={
                                userData.typeJob
                                  ? userData.typeJob
                                  : "Masukkan tipe job"
                              }
                              onChange={inputData}
                            >
                              {jobType.map((item, index) => (
                                <option
                                  value={
                                    item === "Masukkan tipe job" ? "" : item
                                  }
                                  key={index}
                                >
                                  {item}
                                </option>
                              ))}
                            </select>
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
                          <div className={`d-flex input_style gap-5`}>
                            <input
                              type="text"
                              id="skill"
                              name="skill"
                              placeholder="Java"
                              className="w-100"
                              value={inputSkill.skill}
                              onChange={handleInputSkill}
                            />
                            <button
                              type="button"
                              className="button_save"
                              onClick={handleCreateSkill}
                            >
                              Tambah
                            </button>
                          </div>

                          <div
                            className={`${
                              updateSkillUser ? "d-flex" : "d-none"
                            } input_style gap-5`}
                          >
                            <input
                              type="text"
                              id="skill"
                              name="skill"
                              className="w-100"
                              onChange={handleInputUpdateSkill}
                              value={
                                updateSkillUser ? updateSkillUser.skill : ""
                              }
                            />
                            <button
                              type="button"
                              className="button_save"
                              onClick={handleUpdateSkill}
                            >
                              Simpan
                            </button>
                          </div>

                          {skill.loadingGet ? (
                            <Spinner animation="border" variant="primary" />
                          ) : (
                            <div className="d-flex flex-wrap gap-3">
                              {userSkill.map((item) => (
                                <div
                                  className="button button-list-skill text-white text-start d-flex align-items-center justify-content-between gap-4"
                                  key={item.userSkillId}
                                >
                                  <span>{item.skill}</span>
                                  <div className="d-flex gap-1">
                                    <button
                                      type="button"
                                      className="button p-0 text-white"
                                      onClick={() => setUpdateSkillUser(item)}
                                    >
                                      <Icon icon={"la:pen"} width={"15"} />
                                    </button>
                                    <button
                                      type="button"
                                      className="button p-0 text-white"
                                      onClick={() =>
                                        handleDeleteSkill(item.userSkillId)
                                      }
                                    >
                                      <Icon icon={"bi:trash"} width={"15"} />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
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
                          className="mt-5 d-flex flex-column gap-4 mb-5"
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
                                value={experience.company}
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
                                value={experience.position}
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
                                value={experience.entryDate}
                              />
                            </div>

                            <div className="col d-flex flex-column input_style">
                              <label htmlFor="exitDate">Tanggal Keluar</label>
                              <input
                                type="date"
                                id="exitDate"
                                name="exitDate"
                                onChange={inputExperience}
                                value={experience.exitDate}
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
                              value={experience.description}
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

                          <hr />
                        </form>

                        <Modal
                          size="lg"
                          show={modal === "experience" ? true : false}
                          onHide={() => resetForm("experience")}
                          aria-labelledby="example-modal-sizes-title-lg"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                              Update Pengalaman Kerja
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <form
                              action=""
                              className="mt-3 d-flex flex-column gap-4 mb-1"
                            >
                              <div className="row">
                                <div className="col d-flex flex-column input_style">
                                  <label htmlFor="company">
                                    Nama Perusahaan
                                  </label>
                                  <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="PT Apa Saja"
                                    onChange={inputExperience}
                                    value={experience.company}
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
                                    value={experience.position}
                                  />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col d-flex flex-column input_style">
                                  <label htmlFor="entryDate">
                                    Tanggal Masuk
                                  </label>
                                  <input
                                    type="date"
                                    id="entryDate"
                                    name="entryDate"
                                    onChange={inputExperience}
                                    value={experience.entryDate}
                                  />
                                </div>

                                <div className="col d-flex flex-column input_style">
                                  <label htmlFor="exitDate">
                                    Tanggal Keluar
                                  </label>
                                  <input
                                    type="date"
                                    id="exitDate"
                                    name="exitDate"
                                    onChange={inputExperience}
                                    value={experience.exitDate}
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
                                  value={experience.description}
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
                                onClick={handleUpdateExperience}
                              >
                                Update pengalaman kerja
                              </button>

                              <hr />
                            </form>
                          </Modal.Body>
                        </Modal>

                        {dataExperience.data.data?.length > 0 ? (
                          dataExperience.data.data.map((item) => (
                            <div key={item.experienceId}>
                              <div className="bg-white">
                                <div className="row ">
                                  <div className="col-12 pb-3">
                                    <div className="position-text">
                                      {item.position}
                                    </div>
                                    <div className="text-muted">
                                      {item.company}
                                    </div>
                                    <div className="text-muted">
                                      {item.entryDate ? item.entryDate : "-"}{" "}
                                      {" - "}
                                      {item.exitDate
                                        ? item.exitDate
                                        : "Present"}
                                    </div>
                                    <div className="text-muted mt-3">
                                      {" "}
                                      {item.description}
                                    </div>

                                    <div className="d-flex gap-2 mt-2">
                                      <button
                                        className="button background-purple text-white button_small"
                                        onClick={() =>
                                          handleModal("experience", item)
                                        }
                                      >
                                        Edit
                                      </button>
                                      <button
                                        className="button background-purple text-white button_small"
                                        onClick={() =>
                                          handleDeleteExperience(
                                            item.experienceId
                                          )
                                        }
                                      >
                                        Delete
                                      </button>
                                    </div>

                                    <hr />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center">
                            <h4>You have not any Experience uploaded</h4>
                          </div>
                        )}
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
                          className="mt-5 d-flex flex-column gap-4 mb-5"
                        >
                          <div className="d-flex flex-column input_style">
                            <label htmlFor="projectName">Nama aplikasi</label>
                            <input
                              type="text"
                              id="projectName"
                              name="projectName"
                              placeholder="Masukkan nama aplikasi"
                              onChange={inputPortofolio}
                              value={portofolio.projectName}
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
                              value={portofolio.projectRepo}
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

                          <hr />
                        </form>

                        <Modal
                          size="lg"
                          show={modal === "portofolio" ? true : false}
                          onHide={() => resetForm("portofolio")}
                          aria-labelledby="example-modal-sizes-title-lg"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                              Update Portofolio
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <form
                              action=""
                              className="mt-2 d-flex flex-column gap-4 mb-4"
                            >
                              <div className="d-flex flex-column input_style">
                                <label htmlFor="projectName">
                                  Nama aplikasi
                                </label>
                                <input
                                  type="text"
                                  id="projectName"
                                  name="projectName"
                                  placeholder="Masukkan nama aplikasi"
                                  onChange={inputPortofolio}
                                  value={portofolio.projectName}
                                />
                              </div>

                              <div className="d-flex flex-column input_style">
                                <label htmlFor="projectRepo">
                                  Link repository
                                </label>
                                <input
                                  type="text"
                                  id="projectRepo"
                                  name="projectRepo"
                                  placeholder="Masukkan link repo"
                                  onChange={inputPortofolio}
                                  value={portofolio.projectRepo}
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
                                onClick={handleUpdatePortofolio}
                              >
                                Update portfolio
                              </button>
                            </form>
                          </Modal.Body>
                        </Modal>

                        {dataPortofolio.data.data?.length > 0 ? (
                          dataPortofolio.data.data.map((item) => (
                            <div
                              className="d-flex gap-4 mb-4"
                              key={item.portofolioId}
                            >
                              <div style={{ width: "130px" }}>
                                <img
                                  src={`https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${item.image}`}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div>
                                <p className="fs-4 mb-0 fw-bold">
                                  {item.projectName}
                                </p>
                                <p className="fs-6">{item.projectRepo}</p>
                                <div className="d-flex gap-2 mt-2">
                                  <button
                                    className="button background-purple text-white button_small"
                                    onClick={() =>
                                      handleModal("portofolio", item)
                                    }
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="button background-purple text-white button_small"
                                    onClick={() =>
                                      handleDeletePortofolio(item.portofolioId)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center">
                            <h4>You have not any Portofolio uploaded</h4>
                          </div>
                        )}
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
