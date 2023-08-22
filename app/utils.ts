import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
import type { V2_MetaDescriptor } from "@remix-run/node";

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

export function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

export function removeTrailingSlash(href: string): string {
  const url = new URL(href);
  if (url.pathname.endsWith("/") && url.pathname !== "/") {
    url.pathname = url.pathname.slice(0, -1);
  }
  return url.href;
}

interface PageMeta {
  title: string;
  description?: string;
  image?: {
    url: string;
    alt: string;
  };
}

export function getMeta({
  title,
  description,
  image,
}: PageMeta): V2_MetaDescriptor[] {
  if (description && process.env.NODE_ENV === "development") {
    if (description.length < 110) {
      throw new Error(
        `Page description should be at least 110 characters long, currently it's ${description.length}.\n\n"${description}"`
      );
    }
    if (description.length > 160) {
      throw new Error(
        `Page description should be at most 160 characters long, currently it's ${description.length}.\n\n"${description}"`
      );
    }
  }
  return [
    { property: "og:type", content: "website" },
    { title },
    { property: "og:title", content: title },
    { name: "twitter:title", content: title },
    ...(description
      ? [
          { name: "description", content: description },
          { property: "og:description", content: description },
          { name: "twitter:description", content: description },
        ]
      : []),
    ...(image
      ? [
          // https://developers.facebook.com/docs/sharing/best-practices/#images
          { property: "og:image:url", content: image.url },
          { property: "og:image:alt", content: image.alt },
          { property: "og:image:type", content: "image/jpeg" },
          { property: "og:image:width", content: "1080" },
          { property: "og:image:height", content: "1080" },
          // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary
          { name: "twitter:image", content: image.url },
          { name: "twitter:image:alt", content: image.alt },
        ]
      : []),
  ];
}
