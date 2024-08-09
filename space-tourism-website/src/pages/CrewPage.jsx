import { useEffect, useState } from "react";
import initialData from "../data/data.json";
import { useNavigate, Outlet } from "react-router-dom";

export default function CrewPage() {
  const [data, setData] = useState(initialData.crew);
  const savedIndex = JSON.parse(localStorage.getItem("crewPageIndex"));
  const initialIndex = savedIndex !== null ? savedIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const navigate = useNavigate();

  console.log("Crew Page");

  useEffect(() => {
    console.log("Mount");
    localStorage.setItem("crewPageIndex", currentIndex);

    let roleInitial = data[currentIndex].role.toLowerCase();
    let role = roleInitial.replace(" ", "_");
    navigate("/crew/" + role);

    return () => {
      console.log("Unmount");
      localStorage.setItem("crewPageIndex", JSON.stringify(null));
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
