import { Badge } from "@/app/components/ui/badge";
import { BASE_URL } from "@/app/lib/constants";
import { Property } from "@/app/lib/entities/properties";
import { formartCurrency } from "@/app/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  propertyId: string;
}

const ListingPropertyCard = async ({ propertyId }: Props) => {
  let property: Property;
  try {
    property = await (
      await fetch(new URL(`/api/proxy/properties/${propertyId}`, BASE_URL), {
        cache: "no-cache",
      })
    ).json();
  } catch (error: any) {
    return <div>404 not found</div>;
  }

  return (
    <article className="mb-4 overflow-hidden rounded-xl border shadow-md duration-500 ease-in-out hover:shadow-xl">
      <div className="">
        <img
          src={`/api/proxy/files/${property.images[0].path}`}
          alt={property.title}
          className="bg-indigo-800 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="pb-6">
          <Link
            href={`/listings/${propertyId}`}
            className="text-lg hover:text-indigo-600 font-medium duration-500 ease-in-out"
          >
            {property.title}
          </Link>
        </div>
        {property.types.length > 0 && (
          <div className="box-border flex border-t border-b border-solid border-gray-200 px-0 py-6 space-x-2 flex-wrap  items-center">
            {property.types.map((amenity, index) => (
              <Badge
                key={index}
                className="w-fit bg-accent text-accent-foreground space-x-1 space-y-1 rounded-sm"
              >
                {amenity}
              </Badge>
            ))}
          </div>
        )}
        {property.attributes.length > 0 && (
          <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
            {property.attributes.map((attr, index) => (
              <li className="mr-4 flex items-center text-left" key={index}>
                <Badge className="w-fit bg-indigo-50 dark:bg-indigo-950 text-accent-foreground space-x-1 space-y-1 rounded-sm">
                  {`${attr.value} ${attr.name}`}
                </Badge>
              </li>
            ))}
          </ul>
        )}
        <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
          <li className="text-left">
            <span className="text-sm text-gray-400">Price</span>
            <p className="m-0 text-base font-medium">
              {formartCurrency(Number(0))}
            </p>
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
    </article>
  );
};

export default ListingPropertyCard;
