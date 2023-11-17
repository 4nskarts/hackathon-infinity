import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/HomePage/Home";
/* import LoginPage from "./pages/LoginPage/LoginPage"; */

const User = {
  name: "John Doe",
  profilePicture:
    "https://i.pinimg.com/originals/e2/c5/bd/e2c5bdd206a4cb7b118e3a72f1a53d13.jpg",
};

const Issue = {
  title: "Example Issue",
  description:
    "This is an example issue description. It might be a bit long, but that's okay. ut molestiae est Cupiditate dignissimos repellendus consequatur omnis. Harum ipsam porro. Voluptatibus doloremque possimus quas iste nesciunt.",
  tags: ["bug", "feature", "help-wanted"],
  postedTime: "2023-01-01T12:34:56", // Replace with the actual posted time
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home user={User} issue={Issue} />} />
        {/* <Route path="/login/company" element={<LoginPageCompany />} />
        <Route path="/login/employee" element={<LoginPageEmployee />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
