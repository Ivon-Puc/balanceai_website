import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(phoneE164: string, text?: string) {
  const base = `https://wa.me/${phoneE164.replace(/\D/g, "")}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const CONTACT = {
  email: "contato@balanceai.com.br",
  phoneDisplay: "(11) 94190-6079",
  phoneE164: "+5511941906079",
};
