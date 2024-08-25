import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import initialData from "../data/data.json";

export default function CrewPage() {
  const [data, setData] = useState(initialData.crew);
  const savedIndex = JSON.parse(localStorage.getItem("crewPageIndex"));
  const initialIndex = savedIndex !== null ? savedIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const navigateTo = useNavigate();

  useEffect(() => {
    localStorage.setItem("crewPageIndex", currentIndex);

    let roleInitial = data[currentIndex].role.toLowerCase();
    let role = roleInitial.replace(" ", "_");
    navigateTo("/crew/" + role);

    return () => {
      localStorage.setItem("crewPageIndex", JSON.stringify(null));
    };
  }, [currentIndex]);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("crew").classList.add("active");
    }, 50);
  }, []);


  return (
    <>
      <Outlet context={[data, currentIndex, setCurrentIndex]} />
    </>
  );
}
