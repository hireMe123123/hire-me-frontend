import axios from "../../utils/axios";

export const getDataCompanyById = (id) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID",
    payload: axios.get(`/company/${id}`),
  };
};
