import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { HomeAssessment } from "./pages/HomeAssessment";
import { Assessment } from "./pages/Assessment";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeAssessment />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </Router>
  );
};
