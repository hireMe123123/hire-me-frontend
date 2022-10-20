import axios from "../../utils/axios";

export const getDataUserById = (id) => {
  return {
    type: "GET_DATA_USER_BY_ID",
    payload: axios.get(`/user/${id}`),
  };
};

export const getDataUser = () => {
  return {
    type: "GET_DATA_USER",
    payload: axios.get("/user/getalluser"),
  };
};
