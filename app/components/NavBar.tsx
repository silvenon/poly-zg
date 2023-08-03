import { NavLink } from "@remix-run/react";
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function NavigationLink({
  children,
  ...props
}: ComponentPropsWithoutRef<typeof NavLink>) {
  return (
    <div className="relative">
      <NavLink
        {...props}
        className={({ isActive }) =>
          clsx(
            "peer block px-2 py-3 text-sm font-medium sm:px-3 sm:py-4 sm:text-base md:text-lg lg:py-4",
            props.className,
            isActive
              ? "text-red-600 dark:text-white"
              : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
          )
        }
      >
        {children}
      </NavLink>
      <div
        aria-hidden="true"
        className="absolute inset-x-2 bottom-0 hidden h-0.5 bg-red-500 peer-[[aria-current=page]]:block dark:bg-white"
      />
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center space-x-2 border-b bg-stone-50 dark:border-b-stone-700 dark:bg-stone-800 dark:text-stone-300">
      <NavigationLink to="/polyamory">Poliamorija</NavigationLink>
      <NavigationLink to="/meetups">Meetupovi</NavigationLink>
      <NavigationLink to="/literature">Literatura</NavigationLink>
    </nav>
  );
}
