import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import initialData from "../data/data.json";

export default function TechnologyPage() {
  const [data, setData] = useState(initialData.technology);
  const savedIndex = JSON.parse(localStorage.getItem("techPageIndex"));
  const initialIndex = savedIndex !== null ? savedIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const navigateTo = useNavigate();

  useEffect(() => {
    localStorage.setItem("techPageIndex", currentIndex);

    let objNameInitial = data[currentIndex].name.toLowerCase();
    let objName = objNameInitial.replace(" ", "_");
    navigateTo("/technology/" + objName);

    return () => {
      localStorage.setItem("techPageIndex", JSON.stringify(null));
    };
  }, [currentIndex]);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("technology").classList.add("active");
    }, 50);
  }, []);

  
  return (
    <>
      <Outlet context={[data, currentIndex, setCurrentIndex]} />
    </>
  );
}
