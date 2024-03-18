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
import HeroHeader from "../components/display/HeroHeader";

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
    // console.log(error.message);
    agents = [];
  }

  return (
    <div>
      <HeroHeader title="All agents" subtitle="Meet all agents" />
      <ListLayoutWithSideBar sideBar={<FilterForm />}>
        <section className="text-center">
          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            {agents.map((agent, index) => (
              <AgentCard key={index} agent={agent} />
            ))}
          </div>
        </section>
      </ListLayoutWithSideBar>
    </div>
  );
};

export default AgentsListingPage;
