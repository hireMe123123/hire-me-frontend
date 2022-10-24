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

export const updatePortofolio = (portofolioId, data) => {
  return {
    type: "UPDATE_PORTOFOLIO",
    payload: axios.patch(`portfolio/${portofolioId}`, data),
  };
};

export const deletePortfolio = (portofolioId) => {
  return {
    type: "DELETE_PORTOFOLIO",
    payload: axios.delete(`portfolio/${portofolioId}`),
  };
};
