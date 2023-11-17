import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import LandingPage from "./pages/LandingPage"; 
import LoginPage from "./pages/LoginPage/index";
=======
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
>>>>>>> 735bfd473ee05e3ea2c07c50e530687d98ac084a
import Home from "./pages/HomePage/Home";
/* import LoginPage from "./pages/LoginPage/LoginPage"; */

// This is static now, don't remove it

  const users = Array.from({ length: 10 }, (_, index) => ({
    name: `dolor voluptate eius ${index + 1}`,
    profilePicture: `https://i.pinimg.com/originals/cf/d0/e6/cfd0e65ab7aafae09ad428810da84609.jpg`,
  }));

  // Example data for 10 issues
  const issues = Array.from({ length: 10 }, (_, index) => ({
    title: `Consequatur sit hic. ${index + 1}`,
    description: `Velit qui corrupti necessitatibus earum consequatur ea deleniti ipsam. Distinctio  ${
      index + 1
    }`,
    postedTime: "2023-01-01T12:00:00Z",
    tags: [`#tag${index + 1}`, `#tag${index + 2}`],
  }));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
        <Route path="/home" element={<Home user={User} issue={Issue} />} />
=======
        <Route path="/home" element={<Home users={users} issues={issues} />} />
>>>>>>> 735bfd473ee05e3ea2c07c50e530687d98ac084a
        {/* <Route path="/login/company" element={<LoginPageCompany />} />
        <Route path="/login/employee" element={<LoginPageEmployee />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
