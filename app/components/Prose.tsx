import clsx from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function Prose({ className, children }: Props) {
  return (
    <div className={clsx("px-4 py-6 sm:py-8 md:py-10", className)}>
      <div className="prose prose-sm prose-stone mx-auto sm:prose-base md:prose-lg lg:prose-xl dark:prose-invert">
        {children}
      </div>
    </div>
  );
}
