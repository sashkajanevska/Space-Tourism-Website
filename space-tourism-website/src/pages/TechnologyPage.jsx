import { useEffect, useState } from "react";
import Technology from "../components/Technology";
import initialData from "../data/data.json";

export default function TechnologyPage() {
  const [data, setData] = useState(initialData.technology);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("technology").classList.add("active");
    }, 50);
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
