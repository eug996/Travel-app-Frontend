// src/App.tsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
  import CreatePage from "./pages/Create/CreatePage";
  import HomePage from "./pages/Home/HomePage";
  import LocationPage from "./pages/Locations/LocationPage";
  import SearchPage from "./pages/Search/SearchPage";
  import NavBar from "./components/NavBar";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
  
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/locations/:locationId",
    element: <LocationPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
],

  },

]);
  
function LayoutWrapper() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}


export default App;
