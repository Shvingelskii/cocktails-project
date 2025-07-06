import { ICocktail } from "@/store/useCocktailStore.ts";

export const getIngredientsWithMeasures = (cocktail: ICocktail): string[] => {
  const result: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}` as keyof ICocktail];
    const measure = cocktail[`strMeasure${i}` as keyof ICocktail];

    if (ingredient && measure) {
      result.push(`${measure} ${ingredient}`);
    }
  }

  return result;
};
