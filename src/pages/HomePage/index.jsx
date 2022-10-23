/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "./homePage.css";
import Footer from "../../components/Footer";
import NavbarHeader from "../../components/Navbar";
import arrow from "../../assets/img/arrow_searchbar_home.svg";
// import Pagination from "../../components/Pagination";
// import axios from "../../utils/axios";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../../stores/actions/user";
import ReactPaginate from "react-paginate";

export default function HomePage() {
  const dispatch = useDispatch();
  const getEmployee = useSelector((state) => state.user.allData);
  const pageInfo = useSelector((state) => state.user.pageInfo);
  const isLogin = false;
  const [rotate, setRotate] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [sortBy, setSortBy] = useState("");
  const [sortBySkill, setSortBySkill] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [page, search, sortBy, sortBySkill]);

  const getData = async () => {
    try {
      dispatch(getDataUser(page, limit, sortBy, search, sortBySkill));
      console.log(getEmployee);
      console.log(pageInfo);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handlePagination = (data) => {
    setPage(data.selected + 1);
  };

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
            <input
              placeholder="Search for any skill"
              onChange={(e) => setSearch(e.target.value)}
            />
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
              <ul className={`sortDrop list-group ${dropDown && "active"}`}>
                <li
                  className="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSortBySkill("totalskills");
                    setDropDown(!dropDown);
                  }}
                >
                  Sort By Skills
                </li>
                <li
                  className="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSortBy("Freelance");
                    setDropDown(!dropDown);
                    setSortBySkill("");
                  }}
                >
                  Sort By Freelance
                </li>
                <li
                  className="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSortBy("Fulltime");
                    setDropDown(!dropDown);
                  }}
                >
                  Sort By Fulltime
                </li>
                <li
                  className="list-group-item"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => {
                    setSortBy("");
                    setDropDown(!dropDown);
                  }}
                >
                  Reset
                </li>
              </ul>
            </div>
            <button>Search</button>
          </div>
          <div className="main__section">
            {getEmployee.length > 0 ? (
              getEmployee.map((i) => (
                <Card
                  userId={i.userId}
                  name={i.name}
                  job={i.profession}
                  jobType={i.typeJob}
                  location={i.domicile}
                  image={i.image}
                  skills={i.userSkill}
                />
              ))
            ) : (
              <h1 className="w-100">Loading ..</h1>
            )}
          </div>
        </div>
        {/* <div className="home__pagination">
          <Pagination />
        </div> */}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageInfo.totalPage}
          onPageChange={handlePagination}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
      <Footer />
    </>
  );
}
