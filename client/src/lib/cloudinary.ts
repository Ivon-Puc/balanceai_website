const CLOUD_NAME = (import.meta as any).env?.VITE_CLOUDINARY_CLOUD_NAME || "";

export type CldOptions = {
  w?: number;
  h?: number;
  c?: string; // crop: fill, fit, thumb, scale
  q?: string | number; // quality
  f?: string; // format: auto
  dpr?: number | string;
  bg?: string; // background
  ar?: string; // aspect ratio
};

export function cld(publicId: string, opts: CldOptions = {}) {
  const cn = CLOUD_NAME;
  // If no cloud configured, return original publicId if it's absolute, otherwise empty string
  if (!cn) return publicId.startsWith("http") ? publicId : "";

  const parts: string[] = [];
  if (opts.w) parts.push(`w_${opts.w}`);
  if (opts.h) parts.push(`h_${opts.h}`);
  if (opts.c) parts.push(`c_${opts.c}`);
  if (opts.q !== undefined) parts.push(`q_${opts.q}`);
  if (opts.f) parts.push(`f_${opts.f}`);
  if (opts.dpr) parts.push(`dpr_${opts.dpr}`);
  if (opts.bg) parts.push(`b_${opts.bg}`);
  if (opts.ar) parts.push(`ar_${opts.ar}`);

  const transformation = parts.join(",") || "";
  const prefix = `https://res.cloudinary.com/${cn}/image/upload`;
  return transformation
    ? `${prefix}/${transformation}/${publicId}`
    : `${prefix}/${publicId}`;
}

export function defaultOgImage(_title = "BalanceAI") {
  // Para confiabilidade, usamos uma imagem padrão pública.
  // Quando houver um asset og_base no Cloudinary, podemos trocar aqui.
  return "https://res.cloudinary.com/demo/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/v1700000000/og-default.jpg";
}
