import { NavLink, useLocation, useNavigate } from "@remix-run/react";
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

const navigationItems = [
  { name: "Početna", href: "/" },
  { name: "Poliamorija", href: "/polyamory" },
  { name: "Meetupovi", href: "/meetups" },
  { name: "Literatura", href: "/literature" },
];

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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <nav className="relative mb-2 sm:mb-0 sm:border-b sm:border-stone-200 sm:bg-stone-50 sm:dark:border-stone-700 sm:dark:bg-stone-800 sm:dark:text-stone-300">
        <div className="hidden sm:block">
          <div className="relative flex items-center justify-center space-x-2">
            {navigationItems.map((item) => (
              <NavigationLink key={item.name} to={item.href}>
                {item.name}
              </NavigationLink>
            ))}
          </div>
        </div>
        <div className="sm:hidden">
          <label htmlFor="navigation" className="sr-only">
            Odaberi stranicu
          </label>
          <select
            id="navigation"
            className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-md border-0 py-1.5 pl-3 pr-9 font-medium text-red-800  shadow ring-1 ring-black/20 focus-visible:outline-2 focus-visible:outline-orange-300 focus-visible:ring-black/20"
            value={navigationItems.find((tab) => tab.href === pathname)?.href}
            onChange={(event) => navigate(event.target.value)}
          >
            {navigationItems.map((item) => (
              <option key={item.name} value={item.href}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </>
  );
}
