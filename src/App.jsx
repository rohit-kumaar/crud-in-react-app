import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./components/Home/Home.jsx"));
const Create = lazy(() => import("./components/Create/Create.jsx"));
const Update = lazy(() => import("./components/Update/Update.jsx"));
const Read = lazy(() => import("./components/Read/Read.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={"Loading..."}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/create",
    element: (
      <Suspense fallback={"Loading..."}>
        <Create />
      </Suspense>
    ),
  },
  {
    path: "/update/:id",
    element: (
      <Suspense fallback={"Loading..."}>
        <Update />
      </Suspense>
    ),
  },
  {
    path: "/read/:id",
    element: (
      <Suspense fallback={"Loading..."}>
        <Read />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
