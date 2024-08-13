import { useOutletContext } from "react-router-dom";
import Tabs from "./Tabs";

export default function Technology() {
  const [data, currentIndex, setCurrentIndex] = useOutletContext();
  const className = "tech";
  let obj = data[currentIndex];
  let currentName = obj.name;
  let currentDescr = obj.description;
  let currentImg = obj.images.portrait;

  return (
    <div className="tech-container">
      <div className="tech-inner">
        <div className="tech-title">
          <h3>
            <span>03</span>SPACE LAUNCH 101
          </h3>
        </div>
        <div className="tech-content-box">
          <div className="tech-text-content">
            <Tabs
              data={data}
              className={className}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />

            <div className="tech-text">
              <h3>THE TERMINOLOGY...</h3>
              <h1>{currentName.toUpperCase()}</h1>
              <p>{currentDescr}</p>
            </div>
          </div>

          <div className="tech-img">
            <img src={currentImg} alt={currentName} />
          </div>
        </div>
      </div>
    </div>
  );
}
