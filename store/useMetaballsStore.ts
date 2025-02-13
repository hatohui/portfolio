import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MetaballsState {
  isInitialized: boolean;
  setInitialized: (value: boolean) => void;
}

export const useMetaballsStore = create<MetaballsState>()(
  persist(
    (set) => ({
      isInitialized: false,
      setInitialized: (value) => set({ isInitialized: value }),
    }),
    {
      name: "metaballs-storage", // ✅ Persists across navigation
    }
  )
);
