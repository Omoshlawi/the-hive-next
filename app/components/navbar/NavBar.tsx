import React from "react";
import { ThemeToggler } from "../ThemeToggler";
import { HomeIcon } from "lucide-react";
import TheHiveLogo from "../TheHiveLogo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <header className="flex items-center justify-center p-5 ">
      <div className="flex items-center justify-between p-2 px-5 shadow-md w-10/12 rounded-md dark:shadow-zinc-700">
        <TheHiveLogo variant="both" />
        <NavLinks />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default NavBar;
