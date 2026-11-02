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
  }),
  component: Gloww,
});
