import React from "react";
import ClientTestimony from "../index_components/ClientTestimony";
import WhyUs from "../index_components/WhyUs";
import FAQ from "../index_components/FAQ";

const AboutPage = () => {
  return (
    <div>
      <section className="mx-auto px-6 md:max-w-screen-xl">
        <div className="mx-auto mt-20 mb-16 block px-6 text-center">
          <h2 className="mx-auto text-4xl font-bold md:text-5xl">
            The Future is Here.
          </h2>
          <div className="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9  md:w-3/4 xl:w-3/4">
            <p className="text-lg text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              provident repellat cupiditate blanditiis! Sit temporibus
              doloremque molestias, aut necessitatibus quisquam non deleniti
              debitis aperiam ullam! Repudiandae, debitis iure libero reiciendis
              ducimus temporibus!
            </p>
          </div>
        </div>
        <div className="grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-md border border-indigo-200 p-8 shadow-sm"
            >
              <div className="my-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border  text-2xl text-indigo-500">
                  {/* et:beaker */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="0.85em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 27 32"
                  >
                    <path
                      fill="currentColor"
                      d="M17.5 1a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9zM.99 27.635c-1.074 1.511-.954 2.498-.664 3.06C.633 31.29 1.433 32 3.5 32h20c2.067 0 2.867-.71 3.174-1.306c.29-.562.41-1.549-.648-3.034l-6.219-9.95l-.088-.124C19.272 16.948 17 13.022 17 9.75V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7.25c0 3.491-2.465 7.957-2.493 8.005L.99 27.635zm24.796 2.6c-.251.487-1.084.765-2.286.765h-20c-1.202 0-2.035-.278-2.286-.765c-.229-.444-.02-1.162.62-2.066l4.999-8.948l.007.004c.91.525 1.851 1.068 3.719 1.068s2.81-.542 3.719-1.066c.833-.48 1.619-.934 3.22-.934c.607 0 1.133.075 1.617.21l6.08 9.712c.611.858.82 1.576.591 2.02zM10 9.75V3h6v6.75c0 2.84 1.516 6.042 2.404 7.602a7.862 7.862 0 0 0-.905-.059c-1.869 0-2.81.542-3.719 1.066c-.833.48-1.619.934-3.22.934c-1.601 0-2.387-.454-3.219-.934l-.019-.011l.046-.082C7.393 18.226 10 13.58 10 9.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold md:text-xl text-gray-400">
                  Enhanced
                </h3>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, repellendus.
              </p>
            </div>
          ))}
        </div>
      </section>
      <WhyUs />
      <FAQ />
      <ClientTestimony />
    </div>
  );
};

export default AboutPage;
