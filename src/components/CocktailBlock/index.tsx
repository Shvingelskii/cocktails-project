import { ICocktail } from "@/store/useCocktailStore.ts";
import { getIngredientsWithMeasures } from "@/utils/getIngredientsWithMeasures.ts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.scss";

const CocktailBlock = ({ cocktail }: { cocktail: ICocktail }) => {
  const ingredients = getIngredientsWithMeasures(cocktail);
  return (
    <div className="cocktail-block">
      <div className="cocktail-block-wrapper">
        <div className="cocktail-block-wrapper__info">
          <h2>{cocktail.strDrink}</h2>
          <p>{cocktail.strCategory}</p>
          <p>{cocktail.strAlcoholic}</p>
          <p>{cocktail.strGlass}</p>
        </div>
        <div className="cocktail-block-wrapper__instructions">
          <h3>Instructions:</h3>
          <p>{cocktail.strInstructions}</p>
        </div>
        <div className="cocktail-block-wrapper__ingredients">
          <h3>List of ingredients:</h3>
          {ingredients.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
        </div>
      </div>
      <div className="cocktail-block__img">
        {cocktail.strDrinkThumb ? (
          <LazyLoadImage
            alt="drink thumb"
            src={cocktail.strDrinkThumb}
            // effect="blur"
            width="100%"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CocktailBlock;
