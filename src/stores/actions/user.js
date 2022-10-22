import axios from "../../utils/axios";

export const getDataUserById = (id) => {
  return {
    type: "GET_DATA_USER_BY_ID",
    payload: axios.get(`user/${id}`),
  };
};

export const getDataUser = () => {
  return {
    type: "GET_DATA_USER",
    payload: axios.get("/user/getalluser"),
  };
};

export const updateDataUser = (userId, data) => {
  return {
    type: "UPDATE_DATA_USER",
    payload: axios.patch(`user/${userId}`, data),
  };
};

export const updateUserImage = (userId, data) => {
  return {
    type: "UPDATE_IMAGE_USER",
    payload: axios.patch(`user/image/${userId}`, data),
  };
};
