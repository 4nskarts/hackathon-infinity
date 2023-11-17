import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage/index";
import Home from "./pages/HomePage/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import IssuePage from "./pages/IssuePage/IssuePage";

// This is static now, don't remove it

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/issue/:id" element={<IssuePage />} />
            </Routes>
        </Router>
    );
}

export default App;
