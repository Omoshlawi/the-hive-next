"use client";
import React from "react";
import { ThemeToggler } from "../ThemeToggler";
import { HomeIcon } from "lucide-react";
import TheHiveLogo from "../TheHiveLogo";
import NavLinks from "./NavLinks";
import { UserButton } from "./UserButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  if (
    ["/dashboard", "/admin", "/api/auth"].some((link) => pathName.startsWith(link))
  )
    return false;
  return (
    <header className="flex items-center justify-center md:p-5">
      <div className="flex items-center justify-between p-2 px-5 shadow-md w-full rounded-md dark:shadow-zinc-700">
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
