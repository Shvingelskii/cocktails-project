import { create } from "zustand";

export interface ICocktail {
  dateModified: string;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strDrinkThumb: string | null;
  strGlass: string;
  strIBA: string | null;
  strImageAttribution: string | null;
  strImageSource: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strInstructions: string | null;
  strInstructionsDE: string | null;
  strInstructionsES: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strTags: string | null;
  strVideo: string | null;
}

interface ICocktailResponse {
  drinks: ICocktail[];
}

interface CocktailStore {
  cocktails: Record<string, ICocktail[] | null>;
  loading: Record<string, boolean>;
  error: Record<string, string | null>;
  fetchCocktail: (cocktailCode: string) => Promise<void>;
}

export const useCocktailStore = create<CocktailStore>((set, get) => ({
  cocktails: {},
  loading: {},
  error: {},

  fetchCocktail: async (code: string) => {
    if (get().loading[code]) return;

    set((state) => ({
      loading: { ...state.loading, [code]: true },
      error: { ...state.error, [code]: null },
    }));

    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`);
      if (!res.ok) {
        new Error(`Error with status ${res.status}`);
      }

      const data: ICocktailResponse = await res.json();

      set((state) => ({
        cocktails: { ...state.cocktails, [code]: data.drinks },
        loading: { ...state.loading, [code]: false },
        error: { ...state.error, [code]: null },
      }));
    } catch (err: any) {
      set((state) => ({
        loading: { ...state.loading, [code]: false },
        error: { ...state.error, [code]: err.message || "Something went wrong" },
      }));
    }
  },
}));
