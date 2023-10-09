import "./App.css";
import HomePage from "./pages/home-page/home-page";
import Contact from "./pages/contact-page/contact";
import AboutMe from "./pages/about-me-page/about";
import Degree from "./pages/degree-page/degree";
import AboutUniv from "./pages/about-me-content/aboutUniv";
import AboutSkill from "./pages/about-me-content/aboutSkill";
import AboutVolunteer from "./pages/about-me-content/aboutVolunteer";
import "primeflex/primeflex.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/degree" element={<Degree />} />
          <Route path="/university" element={<AboutUniv />} />
          <Route path="/skill" element={<AboutSkill />} />
          <Route path="/volunteer" element={<AboutVolunteer />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
