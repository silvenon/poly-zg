export default function Prose({ children }: { children?: React.ReactNode }) {
  return (
    <div className="px-4 py-6 sm:py-8 md:py-10">
      <div className="prose prose-sm prose-stone mx-auto dark:prose-invert sm:prose-base md:prose-lg lg:prose-xl">
        {children}
      </div>
    </div>
  );
}
