import Link from "next/link";
import ThemeToggler from "../theme/theme-toggler";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-center border-b bg-white dark:bg-zinc-950">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h2 className="text-xl font-semibold lg:text-2xl dark:text-white">
            Countdowns
          </h2>
        </Link>
        <div className="flex flex-row gap-3">
          <ThemeToggler />
          <Button variant="secondary">Login</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
