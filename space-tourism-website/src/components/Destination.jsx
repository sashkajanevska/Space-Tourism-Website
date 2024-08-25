import { useOutletContext } from "react-router-dom";
import Tabs from "./Tabs";

export default function Destination() {
  const [data, currentIndex, setCurrentIndex] = useOutletContext();
  const className = "dest";
  let destination = data[currentIndex];
  let currentImg = destination.images.png;
  let currentName = destination.name;
  let currentDescr = destination.description;
  let currentDist = destination.distance;
  let currentTravel = destination.travel;

  return (
    <div id="destination" className="dest-container">
      <div className="dest-inner">
        <div className="dest-title">
          <h3>
            <span>01</span>PICK YOUR DESTINATION
          </h3>
        </div>

        <div className="dest-content-box">
          <div className="dest-img dest">
            <img src={currentImg} alt={currentName} />
          </div>
          <div className="dest-text">
            <Tabs
              data={data}
              className={className}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <h1 className="dest">{currentName.toUpperCase()}</h1>
            <p className="dest">{currentDescr}</p>
            <hr />
            <div className="dest">
              <div className="dest-distance">
                <p>AVG. DISTANCE</p>
                <h2>{currentDist.toUpperCase()}</h2>
              </div>
              <div className="dest-travel-time">
                <p>EST. TRAVEL TIME</p>
                <h2>{currentTravel.toUpperCase()}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
