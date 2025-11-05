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

  // Otimizações padrão para performance
  const defaultOpts = {
    f: 'auto', // formato automático (WebP/AVIF)
    q: 'auto:good', // qualidade automática otimizada
    ...opts,
  };

  const parts: string[] = [];
  if (defaultOpts.w) parts.push(`w_${defaultOpts.w}`);
  if (defaultOpts.h) parts.push(`h_${defaultOpts.h}`);
  if (defaultOpts.c) parts.push(`c_${defaultOpts.c}`);
  if (defaultOpts.q !== undefined) parts.push(`q_${defaultOpts.q}`);
  if (defaultOpts.f) parts.push(`f_${defaultOpts.f}`);
  if (defaultOpts.dpr) parts.push(`dpr_${defaultOpts.dpr}`);
  if (defaultOpts.bg) parts.push(`b_${defaultOpts.bg}`);
  if (defaultOpts.ar) parts.push(`ar_${defaultOpts.ar}`);

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
