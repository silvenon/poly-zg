import { redirect } from "@remix-run/node";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css?url";
import CanonicalLink from "~/components/CanonicalLink";
import Header from "~/components/Header";
import NavBar from "./components/NavBar";

import { AnalyticsProvider, AnalyticsScript } from "~/services/analytics";

import { removeWww, removeTrailingSlash, getDomainUrl } from "~/utils";

export async function loader({ request }: LoaderFunctionArgs) {
  const desiredUrl = removeTrailingSlash(removeWww(request.url));

  if (request.url !== desiredUrl) {
    throw redirect(desiredUrl, { status: 301 });
  }

  return {
    FLY_APP_NAME: process.env.FLY_APP_NAME,
    origin: getDomainUrl(request),
  };
}

// https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
const iconLinks = [
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
  { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/manifest.webmanifest" },
];

export const links: LinksFunction = () => [
  ...iconLinks,
  { rel: "stylesheet", href: stylesheet },
];

export default function AppWithProviders() {
  return (
    <AnalyticsProvider>
      <App />
    </AnalyticsProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="hr" className="h-full">
      <head>
        {data.FLY_APP_NAME === "poly-zg-staging" && (
          <meta name="robots" content="noindex" />
        )}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:site_name" content="Poly Zagreb" />
        <meta property="og:locale" content="hr_HR" />
        <meta name="twitter:card" content="summary" />
        <CanonicalLink origin={data.origin} />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white dark:bg-stone-900 dark:text-white">
        <Header />
        <NavBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {import.meta.env.PROD && <AnalyticsScript />}
      </body>
    </html>
  );
}
