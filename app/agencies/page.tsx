import React from "react";
import HeroHeader from "../components/display/HeroHeader";
import { PropsWithSearchParams } from "../lib/types/base";
import { Agency } from "../lib/entities/agency";
import { BASE_URL } from "../lib/constants";
import { ListLayoutWithSideBar } from "../components/layouts";
import { FilterForm } from "../agents/components";
import AgencyCard from "./AgencyCard";

const AgenciesPage: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  let agencies: Agency[];
  try {
    const queryParams = new URLSearchParams(searchParams);
    const { results }: { results: any[] } = await (
      await fetch(
        new URL(`/api/proxy/agencies?${queryParams.toString()}`, BASE_URL),
        {
          cache: "no-cache",
        }
      )
    ).json();
    agencies = results;
  } catch (error: any) {
    // console.log(error.message);
    agencies = [];
  }
  return (
    <div>
      <HeroHeader title="All Agencies" subtitle="View our trusted agencies" />
      <ListLayoutWithSideBar sideBar={<FilterForm />}>
        <section className="text-center">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
            {agencies.map((agency, index) => (
              <AgencyCard key={index} agency={agency} />
            ))}
          </div>
        </section>
      </ListLayoutWithSideBar>
    </div>
  );
};

export default AgenciesPage;
