import { createFileRoute } from "@tanstack/react-router";
import { Gloww } from "@/components/Gloww";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gloww Test – Meet Paris, your AI Beauty Consultant" },
      { name: "description", content: "Meet Paris, Gloww's AI beauty consultant who finds the perfect makeup look for your occasion." },
      { property: "og:title", content: "Gloww Test – Meet Paris, your AI Beauty Consultant" },
      { property: "og:description", content: "Meet Paris, Gloww's AI beauty consultant who finds the perfect makeup look for your occasion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "image",
        type: "image/webp",
        imageSrcSet: "/gloww/paris-400.webp 400w, /gloww/paris-640.webp 640w, /gloww/paris-840.webp 840w",
        imageSizes: "(max-width: 768px) 85vw, 420px",
        fetchPriority: "high",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Karla:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Gloww,
});
