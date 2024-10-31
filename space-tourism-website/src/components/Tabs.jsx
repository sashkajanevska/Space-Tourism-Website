import { useEffect, useRef } from "react";

const Tabs = ({ data, className, currentIndex, setCurrentIndex, id }) => {
  const prevIndex = useRef(null);

  const handleTabChange = (index) => {
    document
      .querySelectorAll(`.${className}`)
      .forEach((element) => element.classList.remove("fade"));

    setCurrentIndex(index);
    prevIndex.current = index;
    setTimeout(() => {
      document
        .querySelectorAll(`.${className}`)
        .forEach((element) => element.classList.add("fade"));
    }, 50);
  };

  useEffect(() => {
    prevIndex.current = currentIndex;
  }, []);

  return (
    <ul className={id ? className + "-tabs" + id : className + "-tabs"}>
      {data.map((obj, index) => (
        <li key={index}>
          <a
            className={index === currentIndex ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              if (prevIndex.current !== index) {
                handleTabChange(index);
              }
            }}
          >
            {(className === "dest" && obj.name.toUpperCase()) ||
              (className === "crew" && <div></div>) ||
              (className === "tech" && <div>{index + 1}</div>)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
