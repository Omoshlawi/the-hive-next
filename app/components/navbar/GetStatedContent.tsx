import React from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";
import TheHiveLogo from "../TheHiveLogo";
import ListItem from "./ListItem";

const GetStatedContent = () => {
  return (
    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <TheHiveLogo variant="icon" />
            <div className="mb-2 mt-4 text-lg font-medium">The hive</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Find you favourite home with eas, connect to thatsand of real
              estate stakeholders
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <ListItem href="/rent" title="Rent">
        Find suitable properties for rent
      </ListItem>
      <ListItem href="/sell" title="Sell">
        Finde property buyer now
      </ListItem>
      <ListItem href="/buy" title="Buy">
        Find property buyers with ease
      </ListItem>
    </ul>
  );
};

export default GetStatedContent;
