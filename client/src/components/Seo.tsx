import React, { useEffect } from "react";
import { defaultOgImage } from "@/lib/cloudinary";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string; // website, article, product, software
  jsonLd?: Record<string, any>[];
};

const SITE_URL = typeof window !== "undefined" ? window.location.origin : "https://balanceai.com.br";
const DEFAULT_IMAGE = defaultOgImage("BalanceAI: IA para Atendimento");

export function Seo({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website", jsonLd = [] }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, attr: "name" | "property" = "name") => {
      let tag = document.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      const tag = ensureMeta(name, attr);
      tag.setAttribute("content", content);
    };

    const url = SITE_URL.replace(/\/$/, "") + path;

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = url;

    // JSON-LD structured data
    // Remove previous injected blocks from this component
    document
      .querySelectorAll("script[data-seo-jsonld='true']")
      .forEach((el) => el.parentElement?.removeChild(el));

    jsonLd.forEach((obj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(obj);
      document.head.appendChild(script);
    });
  }, [title, description, path, image, type, JSON.stringify(jsonLd)]);

  return null;
}

export default Seo;
