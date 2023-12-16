"use client";

import React from "react";
import Search from "../../components/Search";
import { Input } from "@/app/components/ui/input";

const FilterHeader = () => {
  return (
    <div className="grid">
      <Input placeholder="Search...." />
      
    </div>
  );
};

export default FilterHeader;
