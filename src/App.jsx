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
    element: <Home />,
  },
  {
    path: ROUTE_PATH.Create,
    element: <Create />,
  },
  {
    path: `${ROUTE_PATH.Update}/:id`,
    element: <Update />,
  },
  {
    path: `${ROUTE_PATH.Read}/:id`,
    element: <Read />,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
