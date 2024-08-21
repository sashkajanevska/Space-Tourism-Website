import "./App.css";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
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
          path: "destination",
          element: <DestinationPage />,
          children: [
            {
              path: "moon",
              element: <Destination />,
            },
            {
              path: "mars",
              element: <Destination />,
            },
            {
              path: "europa",
              element: <Destination />,
            },
            {
              path: "titan",
              element: <Destination />,
            },
          ],
        },
        {
          path: "crew",
          element: <CrewPage />,
          children: [
            {
              path: "commander",
              element: <Crew />,
            },
            {
              path: "mission_specialist",
              element: <Crew />,
            },
            {
              path: "pilot",
              element: <Crew />,
            },
            {
              path: "flight_engineer",
              element: <Crew />,
            },
          ],
        },
        {
          path: "technology",
          element: <TechnologyPage />,
          children: [
            {
              path: "launch_vehicle",
              element: <Technology />,
            },
            {
              path: "spaceport",
              element: <Technology />,
            },
            {
              path: "space_capsule",
              element: <Technology />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="error-msg">
          <p>404 not found</p>
          <Link to={"/"}>Go back</Link>
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
