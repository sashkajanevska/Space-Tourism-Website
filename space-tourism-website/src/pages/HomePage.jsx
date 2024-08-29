import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  

  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
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
