import { combineReducers } from "redux";

import user from "./user";
import company from "./company";
import auth from "./auth";
import portofolio from "./portofolio";
import experience from "./experience";
import skill from "./skill";

export default combineReducers({
  user,
  company,
  auth,
  portofolio,
  experience,
  skill,
});
