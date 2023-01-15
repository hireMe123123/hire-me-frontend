import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import LandingPage from "./pages/LandingPage";
import CompanyProfile from "./pages/CompanyProfile";
import UserHire from "./pages/UserHire";
import EditProfileUser from "./pages/EditProfile/UserProfile";
import EditProfileCompany from "./pages/EditProfile/CompanyProfile";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordCompany from "./pages/ForgotPasswordCompany";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordCompany from "./pages/ResetPasswordCompany";
import PublicRoute from "./utils/routes/publicRoute";
import PrivateRoute from "./utils/routes/privateRoute";
import SignupCompany from "./pages/SignupCompany";
import SigninCompany from "./pages/SigninCompany";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* PUBLIC ROUTE */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/forgot-password-company"
            element={<ForgotPasswordCompany />}
          />
          <Route path="/resetpassword/:OTPReset" element={<ResetPassword />} />
          <Route
            path="/resetpasswordCompany/:OTPReset"
            element={<ResetPasswordCompany />}
          />
          <Route path="/signup-company" element={<SignupCompany />} />
          <Route path="/signin-company" element={<SigninCompany />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-hire" element={<UserHire />} />
          <Route path="/edit-user" element={<EditProfileUser />} />
        </Route>

        {/* PRIVARE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat-company" element={<ChatPage />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/edit-company" element={<EditProfileCompany />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
