import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/destination");
  };

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("home").classList.add("active");
    }, 50);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <h3 data-aos="fade-right">SO, YOU WANT TO TRAVEL TO</h3>
        <h1 data-aos="fade-right">SPACE</h1>
        <p data-aos="fade-up" data-aos-delay="500">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!!
        </p>
      </div>
      <button className="home-btn" onClick={navigateTo}>
        EXPLORE
      </button>
    </div>
  );
}
