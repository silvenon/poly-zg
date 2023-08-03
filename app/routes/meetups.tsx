import MeetupsText from "~/text/Meetups.mdx";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Meetupovi · Poly Zagreb" },
    {
      name: "description",
      content: "Informacije o poliamornim meetupovima u Zagrebu",
    },
  ];
};

export default function MeetupsPage() {
  return (
    <main>
      <MeetupsText />
    </main>
  );
}
