import { Suspense, lazy } from "react";
import { PAGES_ARRAY } from "./const";

const CocktailsPage = lazy(() => import("@/pages/Cocktails"));

export const generalRoutes = PAGES_ARRAY.map((path) => ({
  path,
  element: (
    <Suspense fallback={null}>
      <CocktailsPage />
    </Suspense>
  ),
}));
