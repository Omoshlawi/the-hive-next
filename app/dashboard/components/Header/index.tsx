import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "@/app/components/ThemeToggler";
import { Button } from "@/app/components/ui/button";
import { SearchIcon, TextIcon } from "lucide-react";
import TheHiveLogo from "@/app/components/TheHiveLogo";
import { Input } from "@/app/components/ui/input";
import { UserButton } from "@/app/components/navbar/UserButton";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            variant={"outline"}
            className="z-99999 block rounded-sm border border-stroke p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <TextIcon />
          </Button>
          {/* <!-- Hamburger Toggle BTN --> */}
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Button variant={"ghost"}>
              <TheHiveLogo variant="icon" size={30} />
            </Button>
          </Link>
        </div>

        <div className="hidden sm:flex items-center">
          <SearchIcon />
          <Input
            type="text"
            placeholder="Type to search..."
            className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125 outline-none border-none focus:border-none"
          />
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <ThemeToggler />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}

            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <UserButton />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
