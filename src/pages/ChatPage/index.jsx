import React from "react";
import Footer from "../../components/Footer";
import NavbarHeader from "../../components/Navbar";
import "./chatPage.css";

export default function ChatPage() {
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
            </div>
            <div className="col-md-9 right__section">
              <h3>kanan</h3>
              <hr />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
