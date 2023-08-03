import IntroText from "~/text/Intro.mdx";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Poly Zagreb" },
    {
      name: "description",
      content: "Poliamorna zajednica u Zagrebu",
    },
  ];
};

export default function HomePage() {
  return (
    <main>
      <IntroText />
    </main>
  );
}
