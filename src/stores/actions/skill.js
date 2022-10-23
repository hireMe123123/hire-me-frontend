import axios from "../../utils/axios";

export const createSkill = (data) => {
  return {
    type: "CREATE_SKILL",
    payload: axios.post(`skill/createdata`, data),
  };
};

export const getDataSkillByUserId = (id) => {
  return {
    type: "GET_DATA_SKILL_BY_USER_ID",
    payload: axios.get(`skill/user/${id}`),
  };
};

export const deleteSkill = (skillId) => {
  return {
    type: "DELETE_SKILL",
    payload: axios.delete(`skill/${skillId}`),
  };
};

export const updateSkill = (skillId, data) => {
  return {
    type: "UPDATE_SKILL",
    payload: axios.patch(`skill/update/${skillId}`, data),
  };
};
