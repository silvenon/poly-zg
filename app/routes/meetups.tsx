import MeetupsText from "~/text/Meetups.mdx";
import { getMeta } from "~/utils";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "Naši meetupovi · Poly Zagreb",
    description:
      "Više informacija o našim poliamornim meetupovima u Zagrebu o tome kako ih organiziramo, tko je dobrodošao i koja su pravila ponašanja.",
  });
};

export default function MeetupsPage() {
  return (
    <main>
      <MeetupsText />
    </main>
  );
}
