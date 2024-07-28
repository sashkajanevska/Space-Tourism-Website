import { useState } from "react";
import "./App.css";
import SiteData from "./data/data.json";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";


function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  // const [data, setData] = useState(SiteData);
  // console.log(data);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/destination",
          element: <DestinationPage />,
        },
        {
          path: "/crew",
          element: <CrewPage />,
        },
        {
          path: "/technology",
          element: <TechnologyPage />,
        },
      ],
    },
  ]);
  return (
    <>
      {/* {data.destinations.map((obj) => (
        <img src={obj.images.png} alt="" key={obj.name} />
      ))} */}

      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
