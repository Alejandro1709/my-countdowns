import { create } from "zustand";

type CalendarState = {
  date: Date;
  setDate: (date: Date) => void;
};

export const useCalendarStore = create<CalendarState>((set) => ({
  date: new Date(),
  setDate: (date: Date) => set(() => ({ date })),
}));
