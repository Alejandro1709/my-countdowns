import { useSession } from "next-auth/react";
import Link from "next/link";
import ThemeToggler from "../theme/theme-toggler";
import AccountButton from "../account/account-button";
import LoginButton from "./login-button";
import CountdownDialog from "../countdowns/countdown-dialog";

function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex h-16 items-center justify-center border-b bg-white dark:bg-zinc-950">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h2 className="text-xl font-semibold dark:text-white lg:text-2xl">
            Countdowns
          </h2>
        </Link>
        <div className="flex flex-row gap-3">
          <ThemeToggler />
          {session?.user ? (
            <div className="flex flex-row gap-3">
              <CountdownDialog />
              <AccountButton session={session} />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
