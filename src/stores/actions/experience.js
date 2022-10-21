import axios from "../../utils/axios";

export const getDataExperienceByUserId = (id) => {
  return {
    type: "GET_DATA_EXPERIENCE_USER_BY_ID",
    payload: axios.get(`/experience/user/${id}`),
  };
};
