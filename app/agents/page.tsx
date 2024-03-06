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
import { AgentCard, FilterForm } from "./components";
import { Agent } from "../lib/entities/agents";

const AgentsListingPage: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  let agents: Agent[];
  try {
    const queryParams = new URLSearchParams(searchParams);
    const { results }: { results: any[] } = await (
      await fetch(
        new URL(`/api/proxy/agents?${queryParams.toString()}`, BASE_URL),
        {
          cache: "no-cache",
        }
      )
    ).json();
    agents = results;
  } catch (error: any) {
    console.log(error.message);
    agents = [];
  }

  return (
    <ListLayoutWithSideBar sideBar={<FilterForm />}>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our Executive Team
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {agents.map((agent, index) => (
              <AgentCard key={index} agent={agent} />
            ))}
          </div>
        </div>
      </section>
    </ListLayoutWithSideBar>
  );
};

export default AgentsListingPage;
