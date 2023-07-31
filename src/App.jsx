import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading.jsx";
import { ROUTE_PATH } from "./router/publicRouter.js";
const Home = lazy(() => import("./components/Home.jsx"));
const Create = lazy(() => import("./components/Create.jsx"));
const Update = lazy(() => import("./components/Update.jsx"));
const Read = lazy(() => import("./components/Read.jsx"));

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.Default,
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATH.Create,
    element: (
      <Suspense fallback={<Loading />}>
        <Create />
      </Suspense>
    ),
  },
  {
    path: `${ROUTE_PATH.Update}/:id`,
    element: (
      <Suspense fallback={<Loading />}>
        <Update />
      </Suspense>
    ),
  },
  {
    path: `${ROUTE_PATH.Read}/:id`,
    element: (
      <Suspense fallback={<Loading />}>
        <Read />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
