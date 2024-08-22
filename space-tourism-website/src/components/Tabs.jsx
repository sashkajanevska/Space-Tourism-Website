const Tabs = ({ data, className, currentIndex, setCurrentIndex, id }) => {
  return (
    <ul className={id ? className + "-tabs" + id : className + "-tabs"}>
      {data.map((obj, index) => (
        <li key={index}>
          <a
            className={index === currentIndex ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
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
