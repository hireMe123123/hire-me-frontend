import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import pinIcon from "../../assets/img/icons/pin-icon.png";
import phoneIcon from "../../assets/img/icons/phone-icon.png";
import mailIcon from "../../assets/img/icons/mail-icon.png";
import githubIcon from "../../assets/img/icons/github-icon.png";
import gitlabIcon from "../../assets/img/icons/gitlab-icon.png";
import instagramIcon from "../../assets/img/icons/instagram-icon.png";
import ListSkill from "../../components/ListSkill";
import "./index.css";
import { useSelector } from "react-redux";

export default function UserHire() {
  const user = useSelector((state) => state.user);
  const skill = useSelector((state) => state.skill);
  const userSkill = skill.loadingGet ? "" : skill.data[0].userSkill;
  const userName = user.data[0]?.name;

  const [form, setForm] = useState({
    name: `Hi! ${userName}`,
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: form.name,
      subject: form.subject,
      message: form.message,
    };
    console.log(data);
  };

  console.log(form);

  return (
    <div>
      {/* Header */}
      <Navbar />
      <div className="bg-light">
        <div className="py-5">
          <div className="container-fluid ">
            <div className="container">
              <div className="d-flex flex-row align-items-start">
                <div className="col-4 border rounded rounded-3 me-4 bg-white">
                  <div className="px-4 py-5">
                    <div className="text-center mb-5">
                      <img
                        src={
                          user.data[0]?.image
                            ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${user.data[0]?.image}`
                            : "https://res.cloudinary.com/dra4ha50q/image/upload/v1665756702/Wainscot-Event-Organizing/User/default-profile_tw4rl0.png"
                        }
                        alt=""
                        className="w-50 rounded-pill"
                      />
                    </div>
                    <div className="fw-bold h4">{user.data[0]?.name}</div>
                    <div className="fw-bold">
                      {user.data[0]?.profession
                        ? user.data[0]?.profession
                        : "No Data"}
                    </div>
                    <small>{user.data[0]?.typeJob}</small>

                    <div className="row my-3">
                      <div className="col-12">
                        <img src={pinIcon} alt="" className="icons mb-3" />{" "}
                        {user.data[0]?.domicile
                          ? user.data[0]?.domicile
                          : "No Data"}
                        <br />
                        <img src={phoneIcon} alt="" className="icons" />{" "}
                        {user.data[0]?.phoneNumber
                          ? user.data[0]?.phoneNumber
                          : "-"}
                      </div>
                    </div>

                    <div className="text-muted mb-4">
                      {user.data[0]?.description
                        ? user.data[0]?.description
                        : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea saepe sit ea fuga quisquam architecto atque nostrum minus facilis repellendus laboriosam beatae ut dolor aspernatur! Aliquam labore at beatae. Ut cupiditate quaerat aperiam delectus impedit neque officiis repellat iure sit animi nulla natus tension! Eaque totam error occaecati, quaerat itaque nostrum. Sequi rerum voluptate eveniet necessitatibus."}
                    </div>
                    <div className="fw-bold h5">Skill</div>
                    <div className="d-flex flex-row flex-wrap gap-2 text-dark mb-3">
                      {userSkill.length > 0 ? (
                        userSkill.map((item) => (
                          <div key={item.userSkillId}>
                            <ListSkill dataSkill={item.skill} />
                          </div>
                        ))
                      ) : (
                        <div className="text-center">
                          <h5>No Skill uploaded yet</h5>
                        </div>
                      )}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={mailIcon} alt="" className="icons" />
                      {user.data[0]?.email ? user.data[0]?.email : "-"}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={instagramIcon} alt="" className="icons" />
                      {user.data[0]?.instagram ? user.data[0]?.instagram : "-"}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={githubIcon} alt="" className="icons" />
                      {user.data[0]?.github ? user.data[0]?.github : "-"}
                    </div>
                    <div className="text-muted mb-2">
                      <img src={gitlabIcon} alt="" className="icons" />{" "}
                      {user.data[0]?.gitlab ? user.data[0]?.gitlab : "-"}
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="px-4 py-5">
                    <div className="h3 fw-bold">
                      Hubungi {user.data[0]?.name}
                    </div>
                    <div className="text-muted mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <div>
                      <div className="text-muted mb-1">
                        Tujuan tentang pesan ini
                      </div>
                      <select
                        className="form-select mb-5"
                        aria-label="Default select example"
                        name="subject"
                        onChange={handleChange}
                      >
                        <option selected>Pilih tujuan pesan</option>
                        <option value="Proyek">Proyek</option>
                        <option value="Pesan">Pesan</option>
                        <option value="Pertanyaan">Pertanyaan</option>
                      </select>

                      <div className="text-muted mb-1">
                        Tujuan tentang pesan ini
                      </div>
                      <textarea
                        type="text-area"
                        className="form-control mb-5"
                        placeholder="Deskripsi/ Jelaskan lebih detail!"
                        name="message"
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      className="btn btn-warning w-100"
                      onClick={handleSubmit}
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
