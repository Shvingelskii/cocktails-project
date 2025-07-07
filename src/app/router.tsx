import { createBrowserRouter, Navigate } from "react-router-dom";
import { routes } from "@/app/routes";
import NotFoundPage from "@/app/pages/NotFoundPage";
import { COCKTAILS_PAGES_ARRAY } from "@/shared/constants/routes.ts";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to={COCKTAILS_PAGES_ARRAY[0]} replace />,
      },
      ...routes,
    ],
  },
]);

export default router;
