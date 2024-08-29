import { useEffect, useState } from "react";
import Destination from "../components/Destination";
import initialData from "../data/data.json";

export default function DestinationPage() {
  const [data, setData] = useState(initialData.destinations);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("destination").classList.add("active");
    }, 50);
  }, []);

  return (
    <>
      <Destination
        data={data}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
