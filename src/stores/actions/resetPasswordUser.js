import axios from "../../utils/axios";

export const resetPasswordUser = (OTPReset, form) => {
  return {
    type: "RESET_PASSWORD_USER",
    payload: axios.patch(`auth/resetPassword/${OTPReset}`, form),
  };
};
