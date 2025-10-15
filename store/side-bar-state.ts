import { create } from "zustand";

interface ISideTypes {
  open: boolean;
  setOpen: () => void;
}
export const useSidebarState = create<ISideTypes>((set) => ({
  open: true,
  setOpen: () =>
    set((state) => ({
      open: !state.open,
    })),
}));
