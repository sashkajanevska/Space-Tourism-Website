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
    <div id="crew" className="crew-container">
      <div className="crew-inner">
        <div className="crew-text-content">
          <div className="crew-text">
            <div className="crew-title">
              <h3>
                <span>02</span>MEET YOUR CREW
              </h3>
            </div>
            
            <div className="crew-img-mobile crew">
              <img src={currentImg} alt={currentName} />
            </div>

            <Tabs
              id={"-mobile"}
              data={data}
              className={className}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />

            <h2 className="crew">{currentRole.toUpperCase()}</h2>
            <h1 className="crew">{currentName.toUpperCase()}</h1>
            <p className="crew">{currentBio}</p>
          </div>

          <Tabs
            data={data}
            className={className}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>

        <div className="crew-img crew">
          <img src={currentImg} alt={currentName} />
        </div>
      </div>
    </div>
  );
}
