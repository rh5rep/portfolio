import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const baseUrl = "https://www.rami-hanna.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/profile",
    "/resume",
    "/life",
    "/travel",
    "/giving-back",
    "/contact",
    "/language",
  ];

  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}` })),
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}` })),
  ];
}
