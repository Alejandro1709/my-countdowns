import { handleFetchCountdowns } from "@/services/countdowns";
import { type ICountdown } from "@/types/countdown";
import { create } from "zustand";

export type CountdownState = {
  countdowns: ICountdown[];
  getCountdowns: () => Promise<CountdownState | undefined>;
  setCountdowns: (countdowns: ICountdown[]) => void;
};

export const useCountdownState = create<CountdownState>((set, get) => ({
  countdowns: [],
  getCountdowns: async () => {
    const current = get();

    if (current.countdowns.length > 0) return current;

    const cdn = await handleFetchCountdowns();

    set({ countdowns: cdn });
  },

  setCountdowns: (countdowns: ICountdown[]) => set(() => ({ countdowns })),
}));
