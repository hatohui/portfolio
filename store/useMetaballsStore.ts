import { create } from "zustand";

interface MetaballsStore {
  isInitialized: boolean;
  setInitialized: (value: boolean) => void;
}

export const useMetaballsStore = create<MetaballsStore>((set) => ({
  isInitialized: false,
  setInitialized: (value) => set({ isInitialized: value }),
}));
