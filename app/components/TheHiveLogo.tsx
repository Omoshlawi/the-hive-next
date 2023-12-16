import React from "react";
import logoWhite from "@/public/logo-white.png";
import logoBlack from "@/public/logo-black.png";
import Image from "next/image";
import { Lusitana } from "next/font/google";
import clsx from "clsx";
const listana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] });

interface Props {
  variant?: "text" | "icon" | "both";
  size?: number;
  title?: string;
}

const TheHiveLogo: React.FC<Props> = ({
  size = 50,
  variant = "both",
  title = "The Hive",
}) => {
  return (
    <div className="flex space-x-2 items-center">
      {["both", "icon"].includes(variant) && (
        <div>
          <Image
            className="dark:hidden"
            src={logoBlack}
            alt="The hive logo"
            width={size}
            height={size}
          />
          <Image
            className="hidden dark:block"
            src={logoWhite}
            alt="The hive logo"
            width={size}
            height={size}
          />
        </div>
      )}
      {["both", "text"].includes(variant) && (
        <h1
          className={clsx(`${listana.className} font-bold text-3xl`, {
            // [`text-[${size * 0.5}px]`]: size,
          })}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default TheHiveLogo;
