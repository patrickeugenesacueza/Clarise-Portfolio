
import "./App.css";
import Nav from "./components/Nav.js";
import HeroSection from "./components/pages/HeroSection.js";
import AboutMeSection from "./components/pages/AboutMeSection.js";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <HeroSection />
        <AboutMeSection/>
      </div>
    </>
  );
}

export default App;
