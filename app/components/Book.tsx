import type { PropsWithChildren } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface Props extends PropsWithChildren<{}> {
  title: string;
  subtitle: string;
  author: string;
  href: string;
  cover: string;
}

export default function Function({
  title,
  subtitle,
  author,
  href,
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
        className="group aspect-h-[500] aspect-w-[332] relative block overflow-hidden rounded-xl ring ring-transparent transition hover:ring-red-500 hover:ring-offset-2 dark:ring-offset-stone-900 dark:hover:ring-red-400"
        aria-label="Pogledaj na Amazonu"
      >
        <div>
          <img alt="" src={cover} className="absolute inset-0 object-cover" />
          <div className="absolute right-0 top-0 rounded-bl-lg border-b border-l border-black/10 bg-black/30 p-1 transition-colors group-hover:bg-red-500">
            <ArrowTopRightOnSquareIcon
              aria-hidden="true"
              className="h-6 w-6 text-white"
            />
          </div>
        </div>
      </a>
    </article>
  );
}
