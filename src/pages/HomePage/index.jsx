/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import "./homePage.css";
import Footer from "../../components/Footer";
import NavbarHeader from "../../components/Navbar";
import arrow from "../../assets/img/arrow_searchbar_home.svg";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

export default function HomePage() {
  const isLogin = false;
  const [rotate, setRotate] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const employee = [
    {
      name: "Rizky",
      skill: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Aziz",
      skill: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Dhohir",
      skill: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Abdul",
      skill: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Kevin",
      skill: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Rosid",
      skill: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Fahmi",
      skill: ["Javascript", "HTML", "CSS"],
    },
    {
      name: "Burhan",
      skill: ["Javascript", "HTML", "CSS"],
    },
  ];
  return (
    <>
      <header>
        <NavbarHeader isLogin={isLogin} />
      </header>
      <div className="d-flex align-items-center home__tittle">
        <h3 className="font-weight-medium">Talents</h3>
      </div>
      <div className="home__body">
        <div className="home__container">
          <div className="home__searchbar">
            <input placeholder="Search for any skill" />
            <div className="d-flex flex-row justify-content-center align-items-center">
              <img
                src={arrow}
                style={{
                  width: "20px",
                  transform: rotate ? "rotate(180deg)" : "rotate(0)",
                }}
                onClick={() => {
                  setRotate(!rotate);
                }}
              />
              <p
                className="ml-3 mr-3 mb-0"
                style={{ cursor: "pointer" }}
                onClick={() => setDropDown((dropDown) => !dropDown)}
              >
                Sort
              </p>
              <ul className="sortDrop list-group">
                <li
                  className="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                >
                  Address
                </li>
                <li
                  className="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                >
                  Name
                </li>
              </ul>
            </div>
            <button>Search</button>
          </div>
          <div className="main__section">
            {employee ? (
              employee.map((i) => <Card name={i.name} skills={i.skill} />)
            ) : (
              <h1 className="w-100">Loading ..</h1>
            )}
          </div>
        </div>
        <div className="home__pagination">
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
}
