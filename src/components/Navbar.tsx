import Link from "next/link"; // Import the Link component
import ModeToggle from "./ModeToggle";
import GlobeSVG from "./icons/GlobeSVG";
import HomeSVG from "./icons/HomeSVG";
import ChartSVG from "./icons/ChartSVG";

export default function Navbar() {
  return (
    <footer className="fixed bottom-0 w-full row-start-3 flex gap-6 flex-wrap items-center justify-center pb-5">
      <Link
        href="/"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <HomeSVG />
        Home
      </Link>
      <Link
        href="/stats"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <ChartSVG />
        Stats
      </Link>
      <Link
        href="/teams"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <GlobeSVG />
        Teams
      </Link>
      <ModeToggle />
    </footer>
  );
}
