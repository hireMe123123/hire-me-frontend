import axios from "../../utils/axios";

export const loginCompany = (data) => {
  return {
    type: "LOGIN_COMPANY",
    payload: axios.post("authCompany/login", data),
  };
};
