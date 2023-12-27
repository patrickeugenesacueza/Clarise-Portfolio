
import "./App.css";



import Nav from "./components/Nav.js";
import HeroSection from "./components/pages/HeroSection.js";

function App() {
  return (
    <>
      <div className="px-10 flex flex-col min-h-screen">
        <Nav />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
