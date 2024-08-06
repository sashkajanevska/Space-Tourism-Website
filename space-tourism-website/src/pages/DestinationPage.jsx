import initialData from "../data/data.json";
import { useState } from "react";

export default function DestinationPage() {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);
  let obj = data.destinations[currentIndex];
  let currentImg = obj.images.png;
  let currentName = obj.name;
  let currentDescr = obj.description;
  let currentDist = obj.distance;
  let currentTravel = obj.travel;

  const Tabs = () => {
    return (
      <ul className="dest-tabs">
        {data.destinations.map((obj, index) => (
          <li key={index}>
            <a
              className={index === currentIndex ? "active" : ""}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              {obj.name.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dest-container">
      <div className="dest-title">
        <h2>
          <span>01</span>PICK YOUR DESTINATION
        </h2>
      </div>

      <div className="dest-inner">
        <div className="dest-img">
          <img src={currentImg} alt={currentName} />
        </div>
        <div className="dest-text-content">
          <Tabs />
          <h1>{currentName.toUpperCase()}</h1>
          <p>{currentDescr}</p>
          <hr />
          <div>
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
  );
}
