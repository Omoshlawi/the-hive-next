"use client";
import React, { useState } from "react";
import { ThemeToggler } from "../ThemeToggler";
import TheHiveLogo from "../TheHiveLogo";
import NavLinks from "./NavLinks";
import { UserButton } from "./UserButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MenuIcon, MoreVertical } from "lucide-react";

const NavBar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
  ];

  if (
    ["/dashboard", "/admin", "/api/auth"].some((link) =>
      pathName.startsWith(link)
    )
  )
    return false;
  return (
    <header className="flex items-center justify-center md:p-5 ">
      <div className="flex items-center justify-between p-2 px-5 shadow-md w-full rounded-md dark:shadow-zinc-700">
        <Link href="/">
          <TheHiveLogo variant="both" />
        </Link>
        {/* Fix errors here */}
        <NavLinks
          links={links}
          openSideBar={open}
          onOpenSidebarChange={setOpen}
        />
        <div className="flex space-x-2">
          <div className="max-lg:hidden">
            <UserButton />
          </div>
          <ThemeToggler />
          <Button
            variant={"outline"}
            size={"icon"}
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
