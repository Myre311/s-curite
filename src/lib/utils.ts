import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combine et déduplique des classes Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
