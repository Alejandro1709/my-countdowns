import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleCountdown = (target: Date) => {
  const targetDate = new Date(target).getTime();
  const todayDate = new Date().getTime();
  const gap = targetDate - todayDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const months = days * 30;

  const textDay = Math.floor(gap / days);
  const textHour = Math.floor((gap % days) / hours);
  const textMinute = Math.floor((gap % hours) / minutes);
  const textSecond = Math.floor((gap % minutes) / seconds);
  const textMonth = Math.floor(gap / months);

  return {
    days: textDay > 0 ? textDay : 0,
    hours: textHour,
    minutes: textMinute,
    seconds: textSecond,
    months: textMonth,
  };
};
