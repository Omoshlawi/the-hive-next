"use client";
import React from "react";
import TheHiveLogo from "../TheHiveLogo";
import Link from "next/link";
import { Separator } from "@/app/components/ui/separator";
import { clsx } from "clsx";
import { ChevronRightIcon, Mail, PhoneIcon } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  if (
    ["/dashboard", "/admin", "/api/auth"].some((link) =>
      pathName.startsWith(link)
    )
  )
    return false;
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Agents", href: "/agents" },
    { label: "Agencies", href: "/agents" },
    { label: "Propeties", href: "/properties" },
  ];
  const companyLinks = [
    { label: "Pricing", href: "/" },
    { label: "About", href: "/dashboard" },
    { label: "FAQ", href: "/agents" },
    { label: "Contact us", href: "/contact" },
  ];
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 ">
      <div className="grid grid-cols-1 md:grid-cols-6 p-10 lg:p-20">
        <div />
        <div className="p-5">
          Office Address
          <div className="grid grid-cols-1 gap-3">
            <FooterItem title="Head office">
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </FooterItem>
            <FooterItem title="Head office">
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </FooterItem>
          </div>
        </div>
        <div className="p-5">
          Contact Information
          <div className="grid grid-cols-1 gap-3">
            <FooterItem
              title="Hotline"
              avatar={
                <div className="rounded-full bg-accent p-3">
                  <PhoneIcon />
                </div>
              }
            >
              254793889658
            </FooterItem>
            <FooterItem
              title="Email"
              avatar={
                <div className="rounded-full bg-accent p-3">
                  <Mail />
                </div>
              }
            >
              lawiomosh3@gmail.com
            </FooterItem>
          </div>
        </div>
        <div className="p-5">
          Quick links
          <div className="grid grid-cols-1 gap-3">
            <ul className="grid gap-2">
              {companyLinks.map(({ href, label }, index) => (
                <li key={index} className="">
                  <Link
                    href={href}
                    className="text-zinc-700 flex text-center transition-transform duration-500 ease-in-out transform hover:translate-x-3"
                  >
                    <ChevronRightIcon className="text-zinc-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-5">
          Newsletter
          <div className="grid grid-cols-1 gap-3">
            <p>Subscribe and be the first to recive or updates</p>
            <Input type="email" placeholder="Email" />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div />
      </div>
      <Separator className="bg-zinc-500" />
      <div className="flex justify-center p-8">
        <div className="grow hidden md:flex" />
        <TheHiveLogo variant="both" />
        <div className="grow hidden md:flex" />
        <ul className="flex space-x-3 items-center ">
          {quickLinks.map(({ href, label }, index) => (
            <li key={index}>
              <Link href={href} className="font-bold">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grow hidden md:flex" />
      </div>
      <Separator className="bg-zinc-500" />
      <div className="flex justify-center text-zinc-600 p-5">
        Copyright © 2023. Designed & Developed by Omosh.
      </div>
    </footer>
  );
};

const FooterItem = ({
  title,
  children,
  href,
  className,
  avatar,
}: {
  title: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  avatar?: React.ReactNode;
}) => (
  <div className="flex items-center">
    {avatar}
    <div
      className={clsx(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground",
        className
      )}
    >
      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {title}
      </div>
      <p className="text-sm font-medium leading-none">{children}</p>
    </div>
  </div>
);

export default Footer;
