import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; 
<<<<<<< HEAD
/* import LoginPage from "./pages/LoginPage/LoginPage"; */
=======
import LoginPage from "./pages/LoginPage/index";
import Home from "./pages/HomePage/Home";

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

>>>>>>> 3d074d0fb1030321f4780884869e518e163b7143
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
        {/* <Route path="/login" element={<LoginPage />} /> */}
=======
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home user={User} issue={Issue} />} />
>>>>>>> 3d074d0fb1030321f4780884869e518e163b7143
        {/* <Route path="/login/company" element={<LoginPageCompany />} />
        <Route path="/login/employee" element={<LoginPageEmployee />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
