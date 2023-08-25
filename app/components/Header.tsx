import { Link } from "@remix-run/react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-fancy-gradient relative px-4 pb-8 pt-[clamp(theme(spacing.20),15vw,theme(spacing.28))] text-center text-white sm:pb-6 lg:pb-8">
      <div className="absolute inset-x-0 top-4 flex justify-center">
        <div className="w-[clamp(100px,20vw,180px)]">
          <div className="aspect-h-[299] aspect-w-[270]">
            <Logo aria-label="logo" className="fade-out" />
          </div>
        </div>
      </div>
      <div className="relative space-y-2 sm:space-y-2 lg:space-y-3">
        <div className="text-[min(theme(fontSize.5xl),14vw)] font-black leading-[1] drop-shadow md:text-6xl lg:text-7xl">
          <Link to="/">Poly Zagreb</Link>
        </div>
        <div className="text-sm tracking-wider text-red-200 sm:text-base md:text-lg lg:text-xl">
          Poliamorna zajednica u Zagrebu
        </div>
      </div>
    </header>
  );
}
