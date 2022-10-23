import React, { useState } from "react";
import people from "../../assets/img/img-opinion3.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataCompanyById,
  // updateCompanyImage,
  updateDataCompany,
} from "../../stores/actions/company";

export default function EditProfileCompany() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);
  const dataCompany = company.data[0];
  const [companyData, setCompanyData] = useState(dataCompany);
  // const [newImage, setNewImage] = useState({});
  // const [imagePreview, setImagePreview] = useState("");
  // const lengthImage = Object.keys(newImage).length;

  const inputData = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const handleUpdateDataCompany = () => {
    dispatch(updateDataCompany(dataCompany.companyId, companyData)).then(
      (response) => {
        dispatch(getDataCompanyById(dataCompany.companyId));
        alert(response.value.data.message);
      }
    );
  };
  // const handleInputImage = (e) => {
  //   const { name, files } = e.target;
  //   setNewImage({ [name]: files[0] });
  //   setImagePreview(URL.createObjectURL(files[0]));
  // };

  // const handleUpdateImage = () => {
  //   const imageData = new FormData();
  //   imageData.append("image", newImage.image);
  //   dispatch(updateCompanyImage(dataCompany.companyId, imageData));
  // };
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
                <div className="d-flex flex-row align-items-start">
                  <div className="col-4 me-4">
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
                        {dataCompany.name
                          ? dataCompany.name
                          : "Please add your company name"}
                      </div>
                      <div className="color-gray">
                        {dataCompany.field
                          ? dataCompany.field
                          : "Please add your company field"}
                      </div>

                      <div className="d-flex align-items-center color-gray gap-2 mt-3">
                        <Icon icon={"akar-icons:location"} width="16" />
                        <div className="">
                          {dataCompany.location
                            ? dataCompany.location
                            : "Please add your company location"}
                        </div>
                      </div>

                      <div className="color-gray mb-4 mt-3">
                        {" "}
                        {dataCompany.description
                          ? dataCompany.description
                          : "Please add description about your company"}
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-3 mt-4">
                      <button
                        className="button button_base fw-bold background-purple text-white"
                        onClick={handleUpdateDataCompany}
                      >
                        Simpan
                      </button>
                      <button className="button button_base fw-bold border-purple color-purple">
                        Kembali
                      </button>
                    </div>
                  </div>

                  <div className="col-8 d-flex flex-column gap-4">
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
                              value={companyData.name ? companyData.name : ""}
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="field">Bidang</label>
                            <input
                              type="text"
                              id="field"
                              name="field"
                              placeholder="Masukkan bidang perusahaan ex: Financial"
                              value={companyData.field ? companyData.field : ""}
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="location">Domisili</label>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              placeholder="Masukan Domisili"
                              value={
                                companyData.location ? companyData.location : ""
                              }
                              onChange={inputData}
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
                              value={
                                companyData.description
                                  ? companyData.description
                                  : ""
                              }
                              onChange={inputData}
                            ></textarea>
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Masukkan email"
                              value={companyData.email ? companyData.email : ""}
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="instagram">Instagram</label>
                            <input
                              type="text"
                              id="instagram"
                              name="instagram"
                              placeholder="Masukkan username IG"
                              value={
                                companyData.instagram
                                  ? companyData.instagram
                                  : ""
                              }
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="phoneNumber">Nomor Telepon</label>
                            <input
                              type="text"
                              id="phonenumber"
                              name="phonenumber"
                              placeholder="Masukkan nomor telepon"
                              value={
                                companyData.phonenumber
                                  ? companyData.phonenumber
                                  : ""
                              }
                              onChange={inputData}
                            />
                          </div>

                          <div className="d-flex flex-column input_style">
                            <label htmlFor="linkedIn">Linkedin</label>
                            <input
                              type="text"
                              id="linkedin"
                              name="linkedin"
                              placeholder="Masukkan nama Linkedin"
                              value={
                                companyData.linkedin ? companyData.linkedin : ""
                              }
                              onChange={inputData}
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
