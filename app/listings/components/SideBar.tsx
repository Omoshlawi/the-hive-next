import { Listing } from "@/app/lib/entities/listings";
import React, { FC } from "react";
import ListingProfile from "./ListingProfile";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import SimilarListings from "../../components/display/SimilarListings";
import TourScheduleForm from "./TourScheduleForm";

interface Props {
  listing: Listing;
}

const SideBar: FC<Props> = ({ listing }) => {
  return (
    <div className="p-5">
      <ListingProfile listing={listing} />
      <TourScheduleForm listing={listing} />
     
      <SimilarListings />
    </div>
  );
};

export default SideBar;
