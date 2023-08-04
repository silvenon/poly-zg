import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useAnalytics } from "~/services/analytics";
import clsx from "clsx";

interface Props {
  className?: string;
}

export default function MeetupCard({ className }: Props) {
  const analytics = useAnalytics();
  return (
    <div
      className={clsx(
        className,
        "space-y-4 sm:flex sm:items-center sm:space-x-6 sm:space-y-0"
      )}
    >
      <a
        href="https://www.meetup.com/poly-zagreb/"
        target="_blank"
        rel="noreferrer"
        className="block w-64 max-w-full flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/10 transition hover:text-red-700 hover:shadow-red-700/20 hover:ring-red-900/20 dark:bg-stone-800 dark:shadow-none dark:ring-white/20 dark:hover:text-white dark:hover:ring-white/40"
        aria-label="Poly Zagreb Meetup"
        onClick={() => {
          analytics.trackGoal("OI9FBT6X", 0);
        }}
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
      <p>
        Meetupove organiziramo putem platforme Meeetup.com, pa ako nam želiš
        doći trebat će ti (besplatan) account. Alternativno možeš doći kao
        nečiji <span className="font-black text-red-600">+1</span>.
      </p>
    </div>
  );
}
