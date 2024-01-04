
import "./App.css";
import Nav from "./components/Nav.js";
import HeroSection from "./components/pages/HeroSection.js";
import AboutMeSection from "./components/pages/AboutMeSection.js";
import SkillSection from "./components/pages/SkillSection.js";
import ExperienceSection from "./components/pages/ExperienceSection.js";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <HeroSection />
        <AboutMeSection/>
        <SkillSection/>
        <ExperienceSection/>
      </div>
    </>
  );
}

export default App;
