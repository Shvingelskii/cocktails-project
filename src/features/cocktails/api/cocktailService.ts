import { ICocktail } from "@/features/cocktails/api/types.ts";

interface ICocktailResponse {
  drinks: ICocktail[];
}

export const fetchCocktailByCode = async (code: string): Promise<ICocktailResponse> => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`);
  if (!res.ok) {
    throw new Error(`Error with status ${res.status}`);
  }
  return await res.json();
};
