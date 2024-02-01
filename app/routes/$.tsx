import { MetaFunction } from "@remix-run/node";
import Prose from "~/components/Prose";
import { getMeta } from "~/utils";

export const meta: MetaFunction = () => {
  return getMeta({
    title: "Stranica nije pronađena",
  });
};

export default function NotFound() {
  return (
    <main>
      <Prose className="text-center">
        <p className="font-semibold text-red-700 dark:text-red-300">404</p>
        <h1 className="mt-4">Stranica nije pronađena</h1>
        <p className="lead">
          Nismo uspjeli pronaći ovu stranicu, ali ako je sadržaj zakon, sigurno
          smo ga samo premjestili negdje drugdje 😉
        </p>
        <p className="lead">
          A ako ga nema i važno ti je, javi nam se preko{" "}
          <a href="https://www.meetup.com/poly-zagreb/">Meetup aplikacije</a> 🤙
        </p>
      </Prose>
    </main>
  );
}
