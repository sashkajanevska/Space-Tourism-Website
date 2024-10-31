import { useEffect, useState } from "react";
import initialData from "../data/data.json";
import Technology from "../components/Technology";

export default function TechnologyPage() {
  const [data, setData] = useState(initialData.technology);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("technology").classList.add("active");
    }, 50);
    
    document
      .querySelectorAll(".tech")
      .forEach((element) => element.classList.add("fade"));
  }, []);

  return (
    <>
      <Technology
        data={data}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
