import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";
import { Listing } from "@/app/lib/entities/listings";
import Link from "next/link";
import { formartCurrency } from "@/app/lib/utils";
import { Badge } from "@/app/components/ui/badge";
import { PropsWithSearchParams } from "../lib/types/base";
import { BASE_URL } from "../lib/constants";
import { ListLayoutWithSideBar } from "../components/layouts";
import { FilterForm } from "./components";
import HeroHeader from "../components/display/HeroHeader";
import { getHeaderWithCookie } from "../lib/serverutils";
import SimilarListings from "../components/display/SimilarListings";

const ListingsPage: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  let listings: Listing[];
  try {
    const queryParams = new URLSearchParams(searchParams);
    const { results }: { results: any[] } = await (
      await fetch(
        new URL(`/api/proxy/listings?${queryParams.toString()}`, BASE_URL),
        {
          cache: "no-cache",
          headers: await getHeaderWithCookie(),
        }
      )
    ).json();
    listings = results;
  } catch (error: any) {
    console.log(
      (
        await fetch(new URL(`/api/proxy/listings`, BASE_URL), {
          cache: "no-cache",
        })
      ).status
    );
    console.log(error);
    listings = [];
  }

  return (
    <div>
      <HeroHeader title="All listings" subtitle="Find your desired listing" />
      <ListLayoutWithSideBar
        sideBar={
          <div className="flex flex-col gap-2">
            <FilterForm />
            <SimilarListings />
          </div>
        }
      >
        <div className="w-full rounded-sm flex flex-col space-y-4">
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {listings.map(
              (
                {
                  tags,
                  coverImage,
                  id,
                  title,
                  price,
                  properties,
                  rental,
                  sale,
                },
                index
              ) => (
                <article
                  key={id}
                  className="mb-4 overflow-hidden rounded-xl border shadow-md duration-500 ease-in-out hover:shadow-xl"
                >
                  <div className="relative">
                    {rental && (
                      <Badge className="absolute top-3 left-3 p-2">
                        For Rent
                      </Badge>
                    )}
                    {sale && (
                      <Badge className="absolute top-3 left-3 p-2">
                        For Sale
                      </Badge>
                    )}
                    <img
                      src={`/api/proxy/files/${coverImage.path}`}
                      alt={title}
                      className="bg-indigo-800"
                    />
                  </div>
                  <div className="p-4">
                    <div className="box-border flex px-0 pb-6 flex-wrap">
                      {tags.map((amenity, index) => (
                        <Badge
                          key={index}
                          className="rounded-sm bg-accent text-primary overflow-x-auto mt-2 mr-2"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <div className="pb-6">
                      <Link
                        href={`/listings/${id}`}
                        className="text-lg hover:text-indigo-600 font-medium duration-500 ease-in-out"
                      >
                        {title}({properties.length} properties)
                      </Link>
                    </div>

                    <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                      <li className="text-left">
                        <span className="text-sm text-gray-400">Price</span>
                        <p className="m-0 text-base font-medium">
                          {formartCurrency(Number(price))}
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
              )
            )}
            {/* <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination> */}
          </section>
        </div>
      </ListLayoutWithSideBar>
    </div>
  );
};

export default ListingsPage;
