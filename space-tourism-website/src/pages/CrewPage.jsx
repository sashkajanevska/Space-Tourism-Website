import { useEffect, useState } from "react";
import Crew from "../components/Crew";
import initialData from "../data/data.json";

export default function CrewPage() {
  const [data, setData] = useState(initialData.crew);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("crew").classList.add("active");
    }, 50);
  }, []);

  return (
    <>
      <Crew
        data={data}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
