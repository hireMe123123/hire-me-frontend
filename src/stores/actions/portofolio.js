import axios from "../../utils/axios";

export const getDataPortofolioByUserId = (id) => {
  return {
    type: "GET_DATA_PORTOFOLIO_BY_USER_ID",
    payload: axios.get(`portfolio/user/${id}`),
  };
};
