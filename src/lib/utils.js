import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const validatePhone = (phone) => {
  // Accepts (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
  const phoneRegex = /^(\+?1?[-.]?\s?)?\(?[2-9]\d{2}\)?[-.]?\s?\d{3}[-.]?\s?\d{4}$/;
  return phoneRegex.test(phone);
};

export const validateName = (name) => {
  return name && name.trim().length >= 2;
};
