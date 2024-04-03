import SimilarListings from "@/app/components/display/SimilarListings";
import { lusitana } from "@/app/fonts";
import { Agency } from "@/app/lib/entities/agency";
import clsx from "clsx";
import React from "react";

interface Props {
  agency: Agency;
}

const AgencyDetailSideBar: React.FC<Props> = ({ agency }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="shadow-gray-800 shadow-sm rounded-sm flex flex-col items-center  relative overflow-hidden">
        {/* Background   */}
        <div className="w-full h-full absolute flex flex-col -z-10">
          <div className="h-48 w-full bg-gray-500 dark:bg-gray-800" />
          <div className="h-full bg-background" />
        </div>
        {/* EndBackground */}
        <img
          src={`/api/proxy/files/${agency.logo.path}`}
          alt={agency.name}
          className="rounded-full h-56 w-56 mt-5 bg-indigo-800 object-cover"
        />
        <div className="w-full grid grid-cols-1 gap-2 p-4">
          <span
            className={clsx(
              lusitana.className,
              "text-2xl hover:text-indigo-600 font-medium duration-500 ease-in-out text-center"
            )}
          >
            {`${agency.name}`}
          </span>
          <span className="opacity-50 text-center">{`${agency.state} ${agency.city}, ${agency.country}`}</span>
        </div>
      </div>
      <SimilarListings />
    </div>
  );
};

export default AgencyDetailSideBar;
