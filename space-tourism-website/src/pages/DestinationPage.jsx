import { useEffect, useState } from "react";
import initialData from "../data/data.json";
import { useNavigate, Outlet } from "react-router-dom";

export default function DestinationPage() {
  const [data, setData] = useState(initialData.destinations);
  const savedIndex = JSON.parse(localStorage.getItem("destPageIndex"));
  const initialIndex = savedIndex !== null ? savedIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const navigate = useNavigate();

  console.log("Destination Page");

  useEffect(() => {
    console.log("Mount");
    localStorage.setItem("destPageIndex", currentIndex);

    let destName = data[currentIndex].name.toLowerCase();
    navigate("/destination/" + destName);

    return () => {
      console.log("Unmount");
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
      {console.log("Child component")}
      {console.log(currentIndex)}
    </>
  );
}
