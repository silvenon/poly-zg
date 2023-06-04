import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Poly Zagreb" }];

export default function Index() {
  return (
    <main className="grid min-h-screen place-content-center">
      <h1>Poly Zagreb</h1>
    </main>
  );
}
