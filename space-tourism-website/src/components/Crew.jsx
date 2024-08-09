import { useOutletContext } from "react-router-dom";
import Tabs from "./Tabs";

export default function Crew() {
  const [data, currentIndex, setCurrentIndex] = useOutletContext();
  const className = "crew";
  let member = data[currentIndex];
  let currentRole = member.role;
  let currentName = member.name;
  let currentBio = member.bio;
  let currentImg = member.images.png;

  return (
    <div className="crew-container">
      <div className="crew-text-content">
        <div className="crew-title">
          <h3>
            <span>02</span>MEET YOUR CREW
          </h3>
        </div>

        <h2>{currentRole.toUpperCase()}</h2>
        <h1>{currentName.toUpperCase()}</h1>
        <p>{currentBio}</p>

        <Tabs
          data={data}
          className={className}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      <div className="crew-img">
        <img src={currentImg} alt={currentName} />
      </div>
    </div>
  );
}
