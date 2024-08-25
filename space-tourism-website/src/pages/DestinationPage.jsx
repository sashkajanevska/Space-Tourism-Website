import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import initialData from "../data/data.json";

export default function DestinationPage() {
  const [data, setData] = useState(initialData.destinations);
  const savedIndex = JSON.parse(localStorage.getItem("destPageIndex"));
  const initialIndex = savedIndex !== null ? savedIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const navigateTo = useNavigate();

  useEffect(() => {
    localStorage.setItem("destPageIndex", currentIndex);

    let destName = data[currentIndex].name.toLowerCase();
    navigateTo("/destination/" + destName);

    return () => {
      localStorage.setItem("destPageIndex", JSON.stringify(null));
    };
  }, [currentIndex]);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("destination").classList.add("active");
    }, 50);
  }, []);


  return (
    <>
      <Outlet context={[data, currentIndex, setCurrentIndex]} />
    </>
  );
}
