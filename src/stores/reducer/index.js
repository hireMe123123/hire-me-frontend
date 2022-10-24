import { combineReducers } from "redux";

import user from "./user";
import company from "./company";
import auth from "./auth";
import signup from "./signup";
import signupcompany from "./signupcompany";
import signinCompany from "./signincompany";
import portofolio from "./portofolio";
import experience from "./experience";
import skill from "./skill";
import forgotPasswordU from "./forgotPassword";
import forgotPasswordC from "./forgotPasswordCompany";
import resetPasswordU from "./resetPassword";
import resetPasswordC from "./resetPasswordCompany";

export default combineReducers({
  user,
  company,
  auth,
  signup,
  signupcompany,
  signinCompany,
  portofolio,
  experience,
  skill,
  forgotPasswordC,
  forgotPasswordU,
  resetPasswordU,
  resetPasswordC,
});
