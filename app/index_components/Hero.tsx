import React from "react";
import { lusitana } from "../fonts";
import { PropertySearch } from "./PropertySearch";

const Hero = () => {
  return (
    <section className="min-h-[70vh] p-10">
      <div>
        <h1 className={`text-5xl ${lusitana.className} mb-10 font-bold`}>
          We will find a perfect property for you
        </h1>
        <p className="mb-10">
          Find a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>
        <PropertySearch />
      </div>
    </section>
  );
};

export default Hero;
