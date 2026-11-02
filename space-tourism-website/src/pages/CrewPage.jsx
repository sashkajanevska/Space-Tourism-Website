import { useEffect, useState } from "react";
import initialData from "../data/data.json";
import Crew from "../components/Crew";

export default function CrewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("crew").classList.add("active");
    }, 50);

    document
      .querySelectorAll(".crew")
      .forEach((element) => element.classList.add("fade"));
  }, []);

  return (
    <>
      <Crew
        data={initialData.crew}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
