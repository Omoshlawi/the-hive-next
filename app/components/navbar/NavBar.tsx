import React from "react";
import { ThemeToggler } from "../ThemeToggler";
import { HomeIcon } from "lucide-react";
import TheHiveLogo from "../TheHiveLogo";
import NavLinks from "./NavLinks";
import { UserButton } from "./UserButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex items-center justify-center p-5 bg-gradient-to-l from-slate-200 to-zinc-400  dark:from-red-950 dark:to-zinc-950">
      <div className="flex items-center justify-between p-2 px-5 shadow-md w-10/12 rounded-md dark:shadow-zinc-700 dark:bg-zinc-950">
        <Link href="/">
          <TheHiveLogo variant="both" />
        </Link>
        {/* Fix errors here */}
        {/* <NavLinks /> */}
        <div className="flex space-x-2">
          <UserButton />
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
