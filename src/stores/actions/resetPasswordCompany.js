import axios from "../../utils/axios";

export const resetPasswordCompany = (OTPReset, form) => {
  return {
    type: "RESET_PASSWORD_COMPANY",
    payload: axios.patch(`authCompany/resetPassword/${OTPReset}`, form),
  };
};
