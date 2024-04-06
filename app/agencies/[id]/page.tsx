import HeroHeader from "@/app/components/display/HeroHeader";
import { ListLayoutWithSideBar } from "@/app/components/layouts";
import { BASE_URL } from "@/app/lib/constants";
import { Agency } from "@/app/lib/entities/agency";
import { PropsWithPathParams } from "@/app/lib/types/base";
import React from "react";
import AgencyDetailSideBar from "./AgencyDetailSideBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Calendar, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";
import moment from "moment/moment";

const AgencyDetail: React.FC<PropsWithPathParams> = async ({
  params: { id },
}) => {
  let agency: Agency;
  try {
    agency = await (
      await fetch(new URL(`/api/proxy/agencies/${id}`, BASE_URL), {
        cache: "no-cache",
      })
    ).json();
  } catch (error: any) {
    console.log(error);

    return <div>404 not found</div>;
  }
  return (
    <div>
      <HeroHeader
        title="Agency Detail"
        subtitle={agency.name}
        backgroundImage={
          agency.coverImage
            ? `/api/proxy/files/process/${agency.coverImage.path}`
            : undefined
        }
      />
      <ListLayoutWithSideBar
        reverse
        sideBar={<AgencyDetailSideBar agency={agency} />}
      >
        <div className="w-full px-5 flex flex-col space-y-4">
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>About Agency</CardTitle>
            </CardHeader>
            <CardContent>{agency.description ?? "No description"}</CardContent>
            <CardFooter>
              <div className="">
                <ul className="mx-auto flex list-inside">
                  {agency.facebook && (
                    <a
                      target="_blank"
                      href={agency.facebook}
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white p-2 border rounded-md"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#039be5"
                          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                        ></path>
                      </svg>
                    </a>
                  )}
                  {agency.twitter && (
                    <a
                      target="_blank"
                      href={agency.twitter}
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white p-2 border rounded-md"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#03A9F4"
                          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                        ></path>
                      </svg>
                    </a>
                  )}
                  {agency.linkedIn && (
                    <a
                      target="_blank"
                      href={agency.linkedIn}
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white p-2 border rounded-md"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0288D1"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                        ></path>
                      </svg>
                    </a>
                  )}
                  {agency.instagram && (
                    <a
                      target="_blank"
                      href={agency.instagram}
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white p-2 border rounded-md"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 48 48"
                      >
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                          cx="19.38"
                          cy="42.035"
                          r="44.899"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#fd5"></stop>
                          <stop offset=".328" stop-color="#ff543f"></stop>
                          <stop offset=".348" stop-color="#fc5245"></stop>
                          <stop offset=".504" stop-color="#e64771"></stop>
                          <stop offset=".643" stop-color="#d53e91"></stop>
                          <stop offset=".761" stop-color="#cc39a4"></stop>
                          <stop offset=".841" stop-color="#c837ab"></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                          cx="11.786"
                          cy="5.54"
                          r="29.813"
                          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#4168c9"></stop>
                          <stop
                            offset=".999"
                            stop-color="#4168c9"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                        ></path>
                        <circle
                          cx="31.5"
                          cy="16.5"
                          r="1.5"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#fff"
                          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                        ></path>
                      </svg>
                    </a>
                  )}
                </ul>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>Specialities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {(agency?.specialties ?? []).map((amenity, index) => (
                  <div key={index} className="flex space-x-3 p-2">
                    <CheckCircle />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="flex items-center space-x-3">
                  <div className="p-3 border rounded-md bg-accent">
                    <Mail />
                  </div>
                  <div className="flex flex-col ">
                    <span>{agency.email}</span>
                    <span className="opacity-50">Email</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 border rounded-md bg-accent">
                    <Phone />
                  </div>
                  <div className="flex flex-col ">
                    <span>{agency.phoneNumber}</span>
                    <span className="opacity-50">Call</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 border rounded-md bg-accent">
                    <MapPin />
                  </div>
                  <div className="flex flex-col ">
                    <span>{`${agency.state} ${agency.city}, ${agency.country}`}</span>
                    <span className="opacity-50">Location</span>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="flex flex-col ">
                  <span className="font-bold">{"22 Listings"}</span>
                  <span className="opacity-50 text-xs">Property</span>
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold">{`${agency.country}`}</span>
                  <span className="opacity-50 text-xs">Country</span>
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold">{`${agency.city}`}</span>
                  <span className="opacity-50 text-xs">City</span>
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold">{`${agency.state}`}</span>
                  <span className="opacity-50 text-xs">State</span>
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold">{`${
                    agency.zipCode ?? "None"
                  }`}</span>
                  <span className="opacity-50 text-xs">Zip code</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4">
              {agency.archievements.map((archievement, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 bg-accent p-4"
                >
                  <div className="flex space-x-4 items-center">
                    <Button variant={"outline"} size={"icon"}>
                      <Calendar />
                    </Button>
                    <span>
                      {moment(archievement.createdAt).format("Do dd MM yyy ")}
                    </span>
                  </div>
                  {archievement.attachments[0] && (
                    <img
                      src={`/api/proxy/files/process/${archievement.attachments[0].path}`}
                      alt="attachments"
                      className="object-cover w-full h-[40vh]"
                    />
                  )}
                  <CardDescription>{archievement.description}</CardDescription>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </ListLayoutWithSideBar>
    </div>
  );
};

export default AgencyDetail;
