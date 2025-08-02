import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        {/* Optional: Add more routes below */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
