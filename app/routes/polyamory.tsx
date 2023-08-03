import PolyamoryText from "~/text/Polyamory.mdx";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Poliamorija · Poly Zagreb" },
    {
      name: "description",
      content: "Saznaj više o poliamoriji i poliamornim odnosima.",
    },
    {
      name: "author",
      content: "Matija Marohnić",
    },
  ];
};

export default function PolyamoryPage() {
  return (
    <main>
      <PolyamoryText />
    </main>
  );
}
