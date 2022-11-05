import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import FirstGrid from "./components/FirstGrid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SecondGrid from "./components/SecondGrid";
import Testimonials from "./components/Testimonials";
import "./css/style.css";

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])
  
  return (
    <div className="app">
      <Navbar />
      <FirstGrid />
      <Testimonials />
      <SecondGrid />
      <Footer />
    </div>
  );
}

export default App;
