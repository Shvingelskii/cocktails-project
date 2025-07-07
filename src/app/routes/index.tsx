import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import { COCKTAILS_PAGES_ARRAY } from "@/shared/constants/routes.ts";

const CocktailsPage = lazy(() => import("@/features/cocktails/pages/Cocktails"));

export const routes: RouteObject[] = [
  ...COCKTAILS_PAGES_ARRAY.map((path) => ({
    path,
    element: (
      <Suspense fallback={null}>
        <CocktailsPage />
      </Suspense>
    ),
  })),
  // another routes for another features...
];
