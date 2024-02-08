import Link from "next/link";
import React from "react";

const WhyUs = () => {
  return (
    <div>
      <section className="w-screen">
        <div className="mx-auto w-full py-2 sm:max-w-screen-sm md:max-w-screen-md md:py-12 lg:py-12">
          <div className="flex items-center">
            <div className="w-full">
              <div className="flex justify-center md:pb-8 lg:pb-8">
                <div className="md:w-5/6 w-full text-center lg:w-5/6">
                  <h3 className="pb-4 text-3xl font-bold leading-9 md:text-4xl md:leading-10 lg:text-4xl lg:leading-10 font-serif">
                    Why The hive?
                  </h3>
                  <p className="  mb-4 font-sans text-base font-light leading-7 text-gray-500 md:text-xl md:leading-7 lg:text-xl lg:leading-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nobis recusandae rem sunt consequatur omnis hic perspiciatis
                    consectetur ab pariatur. Distinctio maiores id laborum optio
                    eaque.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-center px-2">
                <div className="w-full divide-y divide-gray-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Link
                      href={"#"}
                      key={index}
                      className="block w-full cursor-pointer py-4 font-sans duration-300 ease-in-out hover:bg-indigo-50 dark:hover:bg-gray-800 md:py-6 lg:py-6"
                      data-blok-c="undefined"
                      data-blok-uid="undefined"
                    >
                      <div className="flex flex-wrap items-center justify-between px-0 md:px-4 lg:px-4">
                        <div className="md:w-1/4 mr-0 w-5/6 pl-4 md:mr-4 md:pl-0 lg:mr-4 lg:w-1/4 lg:pl-0">
                          <h3 className="text-xl font-serif leading-7">
                            Reason {index}
                          </h3>
                        </div>
                        <div className="md:w-1/2 w-5/6 pl-4 md:pl-0 lg:w-1/2 lg:pl-0">
                          <span className="text-base font-light text-gray-500 md:text-base md:leading-6 lg:text-base lg:leading-6 xl:text-base xl:leading-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum, vitae?
                          </span>
                        </div>
                        <div className="md:w-1/12 w-1/12 text-right lg:w-1/12">
                          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-solid border-current font-normal text-indigo-600 duration-150 ease-in-out">
                            {/* hero:chevron-right */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="block h-5 w-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                                className=" "
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
