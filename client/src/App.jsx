import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
