import axios from "../../utils/axios";

export const registerCompany = (data) => {
  return {
    type: "SIGNUP_COMPANY",
    payload: axios.post("authCompany/register", data),
  };
};
