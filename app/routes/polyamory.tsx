import PolyamoryText from "~/text/Polyamory.mdx";
import { getMeta } from "~/utils";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "Što je poliamorija? · Poly Zagreb",
    description:
      "Za razliku od monogamije, poliamorne veze mogu uključivati više ljubavnih veza istovremeno, poliamoriju zapravo možemo nazvati ljubavnom orijentacijom.",
  });
};

export default function PolyamoryPage() {
  return (
    <main>
      <PolyamoryText />
    </main>
  );
}
