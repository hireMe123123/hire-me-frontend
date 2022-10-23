import axios from "../../utils/axios";

export const forgotPasswordCompany = (data) => {
  return {
    type: "FORGOT_PASSWORD_COMPANY",
    payload: axios.post("authCompany/forgotPassword", data),
  };
};
