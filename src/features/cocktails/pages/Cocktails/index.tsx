import CocktailLayout from "@/features/cocktails/layouts/CocktailLayout";
import { useLocation } from "react-router-dom";
import { capitalize } from "lodash";
import CocktailsList from "@/features/cocktails/containers /CocktailsList";
import "./index.scss";

const CocktailsPage = () => {
  const location = useLocation();
  const cocktailPath = location.pathname.slice(1);

  return (
    <CocktailLayout>
      <div className="cocktail-page-wrapper">
        <h1>{`${capitalize(cocktailPath)} Page`}</h1>
        <CocktailsList cocktailPath={cocktailPath} />
      </div>
    </CocktailLayout>
  );
};

export default CocktailsPage;
