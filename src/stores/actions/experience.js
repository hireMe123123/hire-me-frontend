import axios from "../../utils/axios";

export const getDataExperienceByUserId = (id) => {
  return {
    type: "GET_DATA_EXPERIENCE_USER_BY_ID",
    payload: axios.get(`/experience/user/${id}`),
  };
};

export const createExperience = (data) => {
  return {
    type: "CREATE_EXPERIENCE",
    payload: axios.post("experience", data),
  };
};

export const updateExperience = (experienceId, data) => {
  return {
    type: "UPDATE_EXPERIENCE",
    payload: axios.patch(`experience/${experienceId}`, data),
  };
};

export const deleteExperience = (experienceId) => {
  return {
    type: "DELETE_EXPERIENCE",
    payload: axios.delete(`experience/${experienceId}`),
  };
};
