"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React from "react";
const AmenitiesForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Amenities</CardTitle>
        <CardDescription>Propety photos</CardDescription>
      </CardHeader>
      <CardContent>Uploads</CardContent>
    </Card>
  );
};

export default AmenitiesForm;
