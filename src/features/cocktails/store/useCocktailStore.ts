import { create } from "zustand";
import { fetchCocktailByCode } from "@/features/cocktails/api/cocktailService.ts";
import { ICocktail } from "@/features/cocktails/api/types.ts";

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
      const data = await fetchCocktailByCode(code);

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
