import LiteratureText from "~/text/Literature.mdx";
import Book from "~/components/Book";
import { getMeta } from "~/utils";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return getMeta({
    title: "Preporučena literatura · Poly Zagreb",
    description:
      "Literatura koja se preporučuje onima koji žele saznati više o poliamoriji, od evolucionarne psihologije pa sve do prakse.",
  });
};

export default function LiteraturePage() {
  return (
    <main>
      <LiteratureText>
        <div className="flex flex-wrap gap-3">
          <Book
            title="Sex at Dawn"
            subtitle="How We Mate, Why We Stray, and What It Means for Modern Relationships"
            author="Christopher Ryan and Cacilda Jethá"
            href="https://a.co/d/2AmzaDQ"
            linkLabel="Amazon"
            cover="/literature/sex-at-dawn.jpg"
          />
          <Book
            title="More Than Two"
            subtitle="A Practical Guide to Ethical Polyamory"
            author="Franklin Veaux and Eve Rickert"
            href="https://www.morethantwo.com/"
            linkLabel="morethantwo.com"
            cover="/literature/more-than-two.jpg"
          />
          <Book
            title="The Ethical Slut"
            subtitle="A Practical Guide to Polyamory, Open Relationships & Other Adventures"
            author="Janet W. Hardy"
            href="https://a.co/d/5Yzxz4s"
            linkLabel="Amazon"
            cover="/literature/the-ethical-slut.jpg"
          />
        </div>
      </LiteratureText>
    </main>
  );
}
