import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const classNames = (...inputs) => {
  return twMerge(clsx(inputs));
}   