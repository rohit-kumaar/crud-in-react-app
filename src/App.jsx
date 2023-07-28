import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import Read from "./components/Read";
import Update from "./components/Update";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
  {
    path: "/read/:id",
    element: <Read />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
