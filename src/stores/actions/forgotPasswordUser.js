import axios from "../../utils/axios";

export const forgotPasswordUser = (data) => {
  return {
    type: "FORGOT_PASSWORD_USER",
    payload: axios.post("auth/forgotPassword", data),
  };
};
