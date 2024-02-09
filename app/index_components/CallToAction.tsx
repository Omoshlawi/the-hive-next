import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="mx-auto py-16">
      <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
        <div className="text-center">
          <h2 className="bg-clip-text text-3xl font-extrabold text-gray-700 sm:text-5xl">
            Get in touch
          </h2>
          <p className="bg-gradient-to-r from-gray-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Let's take your business to the moon
          </p>
          <Link
            href="#"
            className="shadow-pink-600/30 mt-10 inline-flex h-12 items-center rounded-full bg-indigo-500 px-6 py-3 text-xl font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default CallToAction;
