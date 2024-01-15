import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React from "react";
const AttributesForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Extra Attributes</CardTitle>
        <CardDescription>Propety photos</CardDescription>
      </CardHeader>
      <CardContent>Uploads</CardContent>
    </Card>
  );
};

export default AttributesForm;
