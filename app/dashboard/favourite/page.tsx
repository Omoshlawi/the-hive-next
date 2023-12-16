import { lusitana } from "@/app/fonts";
import React from "react";

const MyFavourite = () => {
  return (
    <div>
      <p className={`${lusitana.className} font-bold text-2xl m-3`}>
        Favourite
      </p>
    </div>
  );
};

export default MyFavourite;
