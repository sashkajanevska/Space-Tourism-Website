const Tabs = ({ data, className, currentIndex, setCurrentIndex, id }) => {
  
  const toggleClass = () => {
    document
      .querySelectorAll("." + className)
      .forEach((element) => element.classList.add("inactive"));
    setTimeout(() => {
      document
        .querySelectorAll("." + className)
        .forEach((element) => element.classList.remove("inactive"));
    }, 250);
  };

  return (
    <ul className={id ? className + "-tabs" + id : className + "-tabs"}>
      {data.map((obj, index) => (
        <li key={index}>
          <a
            className={index === currentIndex ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              toggleClass();
              setTimeout(() => {
                setCurrentIndex(index);
              }, 250);
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
