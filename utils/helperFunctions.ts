import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export const shortenText = (text: string) => {
  if (text.length > 4) return text.slice(0, 4) + '...';
  else return text;
};
