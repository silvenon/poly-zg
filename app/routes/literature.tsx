import LiteratureText from "~/text/Literature.mdx";
import Book from "~/components/Book";

export default function LiteraturePage() {
  return (
    <main>
      <LiteratureText>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <Book
            title="Sex at Dawn"
            subtitle="How We Mate, Why We Stray, and What It Means for Modern Relationships"
            author="Christopher Ryan and Cacilda Jethá"
            href="https://a.co/d/2AmzaDQ"
            cover="/literature/sex-at-dawn.jpg"
          />
          <Book
            title="More Than Two"
            subtitle="A Practical Guide to Ethical Polyamory"
            author="Franklin Veaux and Eve Rickert"
            href="https://a.co/d/ji34DGT"
            cover="/literature/more-than-two.jpg"
          />
        </div>
      </LiteratureText>
    </main>
  );
}
