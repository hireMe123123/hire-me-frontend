import axios from "../../utils/axios";

export const getDataPortofolioByUserId = (id) => {
  return {
    type: "GET_DATA_PORTOFOLIO_BY_USER_ID",
    payload: axios.get(`portfolio/user/${id}`),
  };
};

export const createPortofolio = (data) => {
  return {
    type: "CREATE_PORTOFOLIO",
    payload: axios.post("portfolio", data),
  };
};
