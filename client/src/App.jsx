import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage/index";
import Home from "./pages/HomePage/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import IssuePage from "./pages/IssuePage/IssuePage";
import ContactUsPage from "./pages/ContactUsPage";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        document.body.classList.add("font-poppins")
    }, [])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/issue/:id" element={<IssuePage />} />
                <Route path="/contactus" element={<ContactUsPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
    