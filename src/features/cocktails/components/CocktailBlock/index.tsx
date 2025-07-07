import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.scss";

interface ICocktailBlockProps {
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  ingredients: string[];
}

const CocktailBlock = ({
  strDrink,
  strCategory,
  strAlcoholic,
  strGlass,
  strInstructions,
  strDrinkThumb,
  ingredients,
}: ICocktailBlockProps) => {
  return (
    <div className="cocktail-block">
      <div className="cocktail-block-wrapper">
        <div className="cocktail-block-wrapper__info">
          <h2>{strDrink}</h2>
          <p>{strCategory}</p>
          <p>{strAlcoholic}</p>
          <p>{strGlass}</p>
        </div>
        <div className="cocktail-block-wrapper__instructions">
          <h3>Instructions:</h3>
          <p>{strInstructions}</p>
        </div>
        <div className="cocktail-block-wrapper__ingredients">
          <h3>List of ingredients:</h3>
          {ingredients.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
        </div>
      </div>
      <div className="cocktail-block__img">
        {strDrinkThumb ? (
          <LazyLoadImage
            alt="drink thumb"
            src={strDrinkThumb}
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
