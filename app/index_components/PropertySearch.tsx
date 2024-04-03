import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

import HouseSearchForm from "./HouseSearchForm";
import LandSearchForm from "./LandSearchForm";

export function PropertySearch() {
  return (
    <Tabs defaultValue="password" className="w-full">
      <TabsList className="grid w-[400px] grid-cols-1">
        {/* <TabsTrigger value="account">Land</TabsTrigger> */}
        <TabsTrigger value="password">Property</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <LandSearchForm />
      </TabsContent>
      <TabsContent value="password">
        <HouseSearchForm />
      </TabsContent>
    </Tabs>
  );
}
