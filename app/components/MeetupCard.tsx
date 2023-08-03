import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function MeetupCard() {
  return (
    <a
      href="https://www.meetup.com/poly-zagreb/"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-64 max-w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/10 transition hover:text-red-700 hover:shadow-red-700/20 hover:ring-red-900/20 dark:bg-stone-800 dark:shadow-none dark:ring-white/20 dark:hover:text-white dark:hover:ring-white/40"
      aria-label="Poly Zagreb Meetup"
    >
      <div className="relative">
        <img alt="" src="/meetup-cover.jpg" />
        <img
          alt="meetup"
          src="/meetup.svg"
          className="absolute bottom-2 right-4 w-20"
        />
        <ArrowTopRightOnSquareIcon
          aria-hidden="true"
          className="absolute right-2 top-2 h-6 w-6 text-white"
        />
      </div>
      <div className="py-3 text-center">
        <h2 className="text-center font-medium uppercase tracking-wider md:text-lg">
          Poly Zagreb
        </h2>
      </div>
    </a>
  );
}
