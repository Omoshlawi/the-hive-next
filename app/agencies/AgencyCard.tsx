import React from "react";
import { Agency } from "../lib/entities/agency";
import { lusitana } from "../fonts";
import clsx from "clsx";
import { Separator } from "../components/ui/separator";
import moment from "moment/moment";
import { Badge } from "../components/ui/badge";
import { formartCurrency } from "../lib/utils";
import Link from "next/link";

interface Props {
  agency: Agency;
}

const AgencyCard: React.FC<Props> = ({ agency }) => {
  return (
    <div className="shadow-gray-800 shadow-sm rounded-sm flex flex-col items-center  relative overflow-hidden">
      {/* Background   */}
      <div className="w-full h-full absolute flex flex-col -z-10">
        <div className="h-48 w-full bg-gray-500 dark:bg-gray-800" />
        <div className="h-full bg-background" />
      </div>
      {/* EndBackground */}
      <img
        src={`/api/proxy/files/process/${agency.logo.path}`}
        alt={agency.name}
        className="rounded-full h-36 w-36 mt-5 bg-indigo-800 object-cover"
      />
      <div className="w-full grid grid-cols-1 gap-2 p-4">
        <Link
          href={`/agencies/${agency.id}`}
          className={clsx(
            lusitana.className,
            "text-2xl hover:text-indigo-600 font-medium duration-500 ease-in-out text-center"
          )}
        >
          {agency.name}
        </Link>
        <span className="opacity-50">{`${agency.state} ${agency.city}, ${agency.country}`}</span>
        {/* <div className="flex justify-center">
          <Badge className="w-fit">
            {moment(agency.createdAt).format("Do ddd MMM yyy")}
          </Badge>
        </div> */}
        <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
          <li className="text-left">
            <span className="text-sm text-gray-400">Listings</span>
            <p className="m-0 text-base font-medium">100</p>
          </li>
          <li className="text-left">
            <span className="text-sm text-gray-400">Rating</span>
            <ul className="m-0 flex items-center p-0 font-medium">
              <li className="inline text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li className="inline text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li className="inline text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li className="inline text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li className="inline text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </li>
              <li className="ml-2 inline text-base">5.0(30)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AgencyCard;
