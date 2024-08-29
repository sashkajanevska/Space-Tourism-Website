import "./App.css";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
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
        },
        {
          path: "crew",
          element: <CrewPage />,
        },
        {
          path: "technology",
          element: <TechnologyPage />,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="error-msg">
          <span>404</span>
          <p>Page not found</p>
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
