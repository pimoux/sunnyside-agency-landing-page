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
  const createXFadeAnimations = (className) => {
    gsap.to(className, {
      scrollTrigger: {
        trigger: className,
        start: "top 70%",
        end: "bottom 30%",
      },
      opacity: 1,
      x: 0,
      duration: 1,
    });
  };

  const createYFadeAnimations = (className) => {
    gsap.to(className, {
      scrollTrigger: {
        trigger: className,
        start: "top 70%",
        end: "bottom 30%",
      },
      opacity: 1,
      y: "-87%",
      duration: 1,
    });
  };

  const animateRemoveFilter = (className) => {
    gsap.to(className, {
      scrollTrigger: {
        trigger: className,
        start: "top 60%",
        end: "bottom 40%",
      },
      filter: "blur(0px)",
    });
  };

  const animateFeedbacks = (id, ratioDelay) => {
    gsap.to(id, {
      scrollTrigger: {
        trigger: id,
        start: "top 95%",
        end: "bottom 5%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: ratioDelay * 0.5,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".intro", { opacity: 0, duration: 1, zoom: 0.5 });
    gsap.to(".intro", { opacity: 1, delay: 1, duration: 1, zoom: 1 });

    createXFadeAnimations(".second-item");
    createXFadeAnimations(".fourth-item");

    createYFadeAnimations(".internal-content");

    animateRemoveFilter(".image-transform");
    animateRemoveFilter(".stand-out");

    document.querySelectorAll(".feedback").forEach((elt, i) => {
      animateFeedbacks(`#${elt.id}`, i + 1);
    });
  }, []);

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
