import Tabs from "./Tabs";

export default function Technology({ data, currentIndex, setCurrentIndex }) {
  const className = "tech";
  let obj = data[currentIndex];
  let currentName = obj.name;
  let currentDescr = obj.description;
  let currentImg = obj.images.portrait;
  let currentImgTablet = obj.images.landscape;

  return (
    <div id="technology" className="tech-container">
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
              <h1 className="tech">{currentName.toUpperCase()}</h1>
              <p className="tech">{currentDescr}</p>
            </div>
          </div>

          <div className="tech-img tech">
            <img id="imgDesktop" src={currentImg} alt={currentName} />
            <img id="imgTablet" src={currentImgTablet} alt={currentName} />
          </div>
        </div>
      </div>
    </div>
  );
}
