/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "./homePage.css";
import Footer from "../../components/Footer";
import NavbarHeader from "../../components/Navbar";
import arrow from "../../assets/img/arrow_searchbar_home.svg";
import Pagination from "../../components/Pagination";
import axios from "../../utils/axios";
import Card from "../../components/Card";

export default function HomePage() {
  const isLogin = false;
  const [rotate, setRotate] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [getEmployee, setGetEmployee] = useState({});

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const employee = await axios.get("api/user/getalluser");
      setGetEmployee(employee.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(getEmployee);

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
            {getEmployee.length > 0 ? (
              getEmployee.map((i) => <Card name={i.name} />)
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
