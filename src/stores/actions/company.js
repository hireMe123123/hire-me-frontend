import axios from "../../utils/axios";

export const getDataCompanyById = (id) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID",
    payload: axios.get(`company/${id}`),
  };
};

export const updateDataCompany = (companyId, data) => {
  return {
    type: "UPDATE_DATA_COMPANY",
    payload: axios.patch(`company/${companyId}`, data),
  };
};

export const updateCompanyImage = (companyId, data) => {
  return {
    type: "UPDATE_IMAGE_COMPANY",
    payload: axios.patch(`company/image/${companyId}`, data),
  };
};
