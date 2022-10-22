import axios from "../../utils/axios";

export const getDataSkillByUserId = (id) => {
  return {
    type: "GET_DATA_SKILL_BY_USER_ID",
    payload: axios.get(`/user/skill/${id}`),
  };
};
