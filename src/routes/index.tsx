import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/community/home";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Community Home | YURIMATSU" },
    { name: "description", content: "Discover your international community, upcoming experiences, and meaningful business connections with YURIMATSU." },
    { property: "og:title", content: "Community Home | YURIMATSU" },
    { property: "og:description", content: "Discover international experiences and meaningful business connections." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});
