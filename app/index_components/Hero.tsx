import React from "react";
import { lusitana } from "../fonts";
import { PropertySearch } from "./PropertySearch";
import Image from "next/image";
import hive from "@/public/poly.jpg";

const Hero = () => {
  return (
    <section className="p-10 flex flex-col md:flex-row items-center md:items-start ">
      <div className="w-[90%] md:w-7/12 min-w-[400px]">
        <h1 className={`text-5xl ${lusitana.className} mb-10 font-bold`}>
          We will find a perfect property for you
        </h1>
        <p className="mb-10">
          Find a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>
        <PropertySearch />
      </div>
      <div className="grow hidden md:block px-20  ">
        <Image
          src={hive}
          alt="Hive Image"
          className="w-[500px] h-full object-cover mix-blend-overlay rounded-tl-full rounded-tr-full dark:opacity-100 opacity-50"
        />
        <Image
          src={hive}
          alt="Hive Image"
          className="w-[500px] h-full object-cover mix-blend-overlay dark:opacity-100 opacity-50"
        />
      </div>
    </section>
  );
};

export default Hero;
