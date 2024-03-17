import { ListLayoutWithSideBar } from "@/app/components/layouts";
import { PropsWithPathParams } from "@/app/lib/types/base";
import React from "react";
import AgentDetailSidBar from "./AgentDetailSidBar";
import { Agent } from "@/app/lib/entities/agents";
import { BASE_URL } from "@/app/lib/constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { BookmarkPlus, Heart } from "lucide-react";
import HeroHeader from "@/app/components/display/HeroHeader";

const AgentDetailScreen: React.FC<PropsWithPathParams> = async ({
  params: { id },
}) => {
  let agent: Agent;
  try {
    agent = await (
      await fetch(new URL(`/api/proxy/agents/${id}`, BASE_URL), {
        cache: "no-cache",
      })
    ).json();
  } catch (error: any) {
    return <div>404 not found</div>;
    // console.log(error.message);
  }
  return (
    <div>
      <HeroHeader
        subtitle={`${agent.firstName} ${agent.lastName}`}
        title="Agent Detail"
      />
      <ListLayoutWithSideBar
        reverse
        sideBar={<AgentDetailSidBar agent={agent} />}
      >
        <div className="w-full px-5 flex flex-col space-y-4">
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              {/* Badges */}
              {(agent?.specialties ?? []).length > 0 && (
                <div className="flex space-x-2">
                  {(agent?.specialties ?? []).map((type, index) => (
                    <Badge
                      key={index}
                      className="rounded-sm bg-indigo-800 dark:bg-indigo-500 overflow-x-auto"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="flex flex-col lg:flex-row lg:justify-between ">
                <div>
                  {/* <CardTitle>{property.title}</CardTitle>
                  <span className="opacity-80">{`${property.location.address} ${property.location.city} ${property.location.state} ${property.location.country} ${property.location.zipCode}`}</span> */}
                </div>
                <div className="flex space-x-2 mt-2">
                  <Button className="w-fit">
                    <BookmarkPlus />
                  </Button>
                  <Button className="w-fit">
                    <Heart />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>About Property</CardTitle>
            </CardHeader>
            {/* <CardContent>{property.description}</CardContent> */}
          </Card>
          {/* <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex space-x-3 p-2">
                    <CheckCircle />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}
          {/* <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>Advance Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {property.attributes.map((attr, index) => (
                  <div key={index} className="flex space-x-3 p-2 items-center">
                    <CheckCircle2 />
                    <div className="grid grid-cols-1">
                      <span className="font-bold">{attr.value}</span>
                      <span>{attr.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </div>
      </ListLayoutWithSideBar>
    </div>
  );
};

export default AgentDetailScreen;
