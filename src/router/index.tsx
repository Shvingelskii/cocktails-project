import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "@/pages/Error";

import { generalRoutes } from "./general-routes";
import { PAGES_ARRAY } from "@/router/const.ts";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={PAGES_ARRAY[0]} replace />,
      },
      ...generalRoutes,
    ],
  },
]);

export default router;
