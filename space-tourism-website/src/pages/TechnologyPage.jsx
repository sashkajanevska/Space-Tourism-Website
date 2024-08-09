import { useEffect, useState } from "react";
import initialData from "../data/data.json";
import { useNavigate, Outlet } from "react-router-dom";

export default function TechnologyPage() {
  const [data, setData] = useState(initialData.technology);
  const savedIndex = JSON.parse(localStorage.getItem("techPageIndex"));
  const initialIndex = savedIndex !== null ? savedIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const navigate = useNavigate();

  console.log("Technology Page");

  useEffect(() => {
    console.log("Mount");
    localStorage.setItem("techPageIndex", currentIndex);

    let objNameInitial = data[currentIndex].name.toLowerCase();
    let objName = objNameInitial.replace(" ", "_");
    navigate("/technology/" + objName);

    return () => {
      console.log("Unmount");
      localStorage.setItem("techPageIndex", JSON.stringify(null));
    };
  }, [currentIndex]);

  return (
    <>
      <Outlet context={[data, currentIndex, setCurrentIndex]} />
      {console.log("Child component")}
      {console.log(currentIndex)}
    </>
  );
}
