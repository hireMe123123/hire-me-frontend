import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import LandingPage from "./pages/LandingPage";
import CompanyProfile from "./pages/CompanyProfile";
import UserHire from "./pages/UserHire";
import EditProfileUser from "./pages/EditProfile/UserProfile";
import EditProfileCompany from "./pages/EditProfile/CompanyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/user-hire" element={<UserHire />} />
        <Route path="/edit-user" element={<EditProfileUser />} />
        <Route path="/edit-company" element={<EditProfileCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
