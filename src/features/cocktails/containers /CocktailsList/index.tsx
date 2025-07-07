import { useEffect } from "react";
import CocktailBlock from "@/features/cocktails/components/CocktailBlock";
import { useCocktailStore } from "@/features/cocktails/store/useCocktailStore.ts";
import { getIngredientsWithMeasures } from "@/shared/utils/getIngredientsWithMeasures.ts";
import "./index.scss";

const CocktailsList = ({ cocktailPath }: { cocktailPath: string }) => {
  const { cocktails, fetchCocktail, loading, error } = useCocktailStore();

  useEffect(() => {
    if (!cocktails || !cocktails[cocktailPath]) {
      fetchCocktail(cocktailPath);
    }
  }, [cocktailPath, cocktails]);

  const hasCocktails = cocktails && cocktails[cocktailPath] && cocktails[cocktailPath]?.length > 0;
  const isLoading = loading && loading[cocktailPath];

  if (error && error[cocktailPath]) return <p>{`Error: ${error}`}</p>;

  if (isLoading) return <p>Loading...</p>;

  if (!hasCocktails && !isLoading) return <p>{`Cocktail ${cocktailPath} not found.`}</p>;

  return (
    <div className="cocktails-list">
      {cocktails[cocktailPath]?.map((cocktail) => {
        const ingredients = getIngredientsWithMeasures(cocktail);
        return (
          <CocktailBlock
            key={cocktail.idDrink}
            strDrink={cocktail.strDrink}
            strCategory={cocktail.strCategory}
            strAlcoholic={cocktail.strAlcoholic}
            strGlass={cocktail.strGlass}
            strInstructions={cocktail.strInstructions ?? ""}
            strDrinkThumb={cocktail.strDrinkThumb ?? ""}
            ingredients={ingredients}
          />
        );
      })}
    </div>
  );
};

export default CocktailsList;
