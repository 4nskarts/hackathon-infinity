import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; 
/* import LoginPage from "./pages/LoginPage/LoginPage"; */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/login/company" element={<LoginPageCompany />} />
        <Route path="/login/employee" element={<LoginPageEmployee />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
