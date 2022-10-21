import { combineReducers } from "redux";

import user from "./user";
import company from "./company";
import auth from "./auth";

export default combineReducers({
  user,
  company,
  auth,
});
