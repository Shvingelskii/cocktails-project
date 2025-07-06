import { useLocation } from "react-router-dom";
import { useCocktailStore } from "@/store/useCocktailStore.ts";
import { useEffect } from "react";
import { capitalize } from "lodash";
import CocktailBlock from "@/components/CocktailBlock";
import "./index.scss";

const Cocktails = () => {
  const location = useLocation();
  const cocktailPath = location.pathname.slice(1);
  const { cocktails, fetchCocktail, loading, error } = useCocktailStore();

  useEffect(() => {
    if (cocktailPath) {
      fetchCocktail(cocktailPath);
    }
  }, [cocktailPath]);

  if (error && error[cocktailPath]) return <p>{`Error: ${error}`}</p>;

  const hasCocktails = cocktails && cocktails[cocktailPath] && cocktails[cocktailPath]?.length > 0;
  const isLoading = loading && loading[cocktailPath];

  // we can add loader here
  if (!hasCocktails && isLoading) return <p>Loading...</p>;

  if (!hasCocktails && !isLoading) return <p>{`Cocktail ${cocktailPath} not found.`}</p>;

  return (
    <div className="cocktail-page-wrapper">
      <h1>{`${capitalize(cocktailPath)} Page`}</h1>
      <div className="cocktails-list">
        {cocktails[cocktailPath]?.map((cocktail) => (
          <CocktailBlock key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
