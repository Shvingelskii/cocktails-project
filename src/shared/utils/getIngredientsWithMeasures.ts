import { ICocktail } from "@/features/cocktails/api/types.ts";
export const MAX_INGREDIENTS = 15;

export const getIngredientsWithMeasures = (cocktail: ICocktail): string[] => {
  const result: string[] = [];

  for (let i = 1; i <= MAX_INGREDIENTS; i++) {
    const ingredient = cocktail[`strIngredient${i}` as keyof ICocktail];
    const measure = cocktail[`strMeasure${i}` as keyof ICocktail];

    if (ingredient && measure) {
      result.push(`${measure} ${ingredient}`);
    }
  }

  return result;
};
