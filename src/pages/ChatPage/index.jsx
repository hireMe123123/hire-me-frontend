import React from "react";
import Footer from "../../components/Footer";
import NavbarHeader from "../../components/Navbar";
import "./chatPage.css";
// import noPhoto from "../../assets/img/no-photo.png";
import chatButton from "../../assets/img/chat_button.png";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ChatPage() {
  const { state } = useLocation();
  const user = useSelector((state) => state.user);
  const company = useSelector((state) => state.company);
  return (
    <>
      <header>
        <NavbarHeader />
      </header>
      <div className="chat__background">
        <div className="container">
          <div className="d-flex chat__container">
            <div className="col-md-3 left__section">
              <h3>Chat</h3>
              <hr />
              <div className="d-flex" style={{ marginLeft: "10px" }}>
                <div className="left__section__img">
                  <img
                    src={
                      user.data[0].image
                        ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${user.data[0].image}`
                        : "https://res.cloudinary.com/dra4ha50q/image/upload/v1665756702/Wainscot-Event-Organizing/User/default-profile_tw4rl0.png"
                    }
                    alt="pp"
                    className="rounded-circle"
                    style={{ width: "44px" }}
                  />
                </div>
                <div className="left__section__name">
                  <h4 style={{ marginTop: "6px", marginLeft: "5px" }}>
                    {user.data[0].name}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-9 right__section">
              <div
                className="d-flex"
                style={{ marginLeft: "10px", marginTop: "7px" }}
              >
                <div className="right__section__img">
                  <img
                    src={
                      user.data[0].image
                        ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${user.data[0].image}`
                        : "https://res.cloudinary.com/dra4ha50q/image/upload/v1665756702/Wainscot-Event-Organizing/User/default-profile_tw4rl0.png"
                    }
                    alt="pp"
                    className="rounded-circle"
                    style={{ width: "44px" }}
                  />
                </div>
                <div className="right__section__name">
                  <h4 style={{ marginTop: "6px", marginLeft: "5px" }}>
                    {user.data[0].name}
                  </h4>
                </div>
              </div>
              <hr />
              {/* Chat Company 1 */}
              <div className="d-flex">
                <div className="chat__company__image">
                  <img
                    src={
                      company.data[0].image
                        ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${company.data[0].image}`
                        : "https://res.cloudinary.com/dra4ha50q/image/upload/v1665756702/Wainscot-Event-Organizing/User/default-profile_tw4rl0.png"
                    }
                    className="rounded-circle"
                    style={{ width: "44px", marginLeft: "10px" }}
                  />
                </div>
                <div className="chat__company_desc">
                  <p>Subject: {state.subject}</p>
                  <hr />
                  <p>{state.message}</p>
                </div>
              </div>
              {/* Chat user 1 */}
              <div className="d-flex chat__user" style={{ display: "none" }}>
                <div className="chat__user__desc">
                  <p>
                    Terimakasih atas tawaran yang diberikan, saya berminat
                    mengikuti proses hiring
                  </p>
                </div>
                <div className="chat__user__image">
                  <img
                    src={
                      user.data[0].image
                        ? `https://res.cloudinary.com/dihnhvb2q/image/upload/v1666284419/${user.data[0].image}`
                        : "https://res.cloudinary.com/dra4ha50q/image/upload/v1665756702/Wainscot-Event-Organizing/User/default-profile_tw4rl0.png"
                    }
                    className="rounded-circle"
                    style={{ width: "44px", marginLeft: "10px" }}
                  />
                </div>
              </div>
              <div>
                <form>
                  <input
                    type="text"
                    className="input__chat"
                    placeholder="type message..."
                  />
                  <button type="submit" className="send__chat">
                    <img src={chatButton} alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
