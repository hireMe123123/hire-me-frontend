import { combineReducers } from "redux";

import user from "./user";
import company from "./company";
import auth from "./auth";
<<<<<<< HEAD
import signup from "./signup";
import signupcompany from "./signupcompany";
import signinCompany from "./signincompany";
=======
import portofolio from "./portofolio";
import experience from "./experience";
import skill from "./skill";
>>>>>>> b55bc885c36b808e5fbcc15987cb29bf4ad6fc90

export default combineReducers({
  user,
  company,
  auth,
<<<<<<< HEAD
  signup,
  signupcompany,
  signinCompany,
=======
  portofolio,
  experience,
  skill,
>>>>>>> b55bc885c36b808e5fbcc15987cb29bf4ad6fc90
});
