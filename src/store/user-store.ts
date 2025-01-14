import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  update: (user: User) => void;
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  counter: 0,
  update: (user) => set(() => ({ user })),
  increment: () =>
    set((state) => ({
      counter: state.counter + 1,
    })),
  decrement: () =>
    set((state) => ({
      counter: state.counter - 1,
    })),
}));
