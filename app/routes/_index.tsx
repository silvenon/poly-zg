import IntroText from "~/text/Intro.mdx";
import type { MetaFunction } from "@remix-run/node";
import { getMeta } from "~/utils";
import type { loader as rootLoader } from "~/root";

export const meta: MetaFunction<unknown, { root: typeof rootLoader }> = ({
  matches,
}) => {
  const origin = matches.find((match) => match.id === "root")?.data.origin;
  return getMeta({
    title: "Poly Zagreb",
    description:
      "Poliamorna zajednica u Zagrebu za nas koji se nismo pronašli u monogamiji. Nalazimo se putem meetupova, i rado upoznajemo nove članove.",
    image: origin
      ? {
          url: String(new URL("/seo.jpg", origin)),
          alt: "logo",
        }
      : undefined,
  });
};

export default function HomePage() {
  return (
    <main>
      <IntroText />
    </main>
  );
}
