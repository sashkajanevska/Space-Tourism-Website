import { useEffect, useState } from "react";
import initialData from "../data/data.json";;
import Destination from "../components/Destination";

export default function DestinationPage() {
  const [data, setData] = useState(initialData.destinations);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("destination").classList.add("active");
    }, 50);

    document
      .querySelectorAll(".dest")
      .forEach((element) => element.classList.add("fade"));
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
