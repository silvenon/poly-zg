import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<{}> {
  title: string;
  subtitle: string;
  author: string;
  href: string;
  linkLabel: string;
  cover: string;
}

export default function Function({
  title,
  subtitle,
  author,
  href,
  linkLabel,
  cover,
  children,
}: Props) {
  return (
    <article>
      <div className="sr-only">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div>{author}</div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="aspect-h-[500] aspect-w-[332] relative block overflow-hidden rounded-xl ring ring-transparent transition-shadow hover:ring-red-500 hover:ring-offset-2 dark:ring-offset-stone-900 dark:hover:ring-red-400"
        aria-label={linkLabel}
        title={`${title}: ${subtitle} by ${author}`}
      >
        <div>
          <img alt="" src={cover} className="absolute inset-0 object-cover" />
        </div>
      </a>
    </article>
  );
}
