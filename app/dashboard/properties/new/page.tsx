"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { error } from "console";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropertySchema } from "@/app/lib/schema/property";
import { z } from "zod";
import { InfoIcon, SearchIcon } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

type PropertyForm = z.infer<typeof PropertySchema>;

const NewProperty = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyForm>({
    resolver: zodResolver(PropertySchema),
  });
  const [error, setError] = useState<string>();

  return (
    <div className="max-w-xl space-y-3 p-5">
      {error && (
        <div className="mb-5 flex items-start text-red-800">
          <InfoIcon />
          <div>{error}</div>
        </div>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit((data) =>
          setError("Unkone err ocuured" + JSON.stringify(data))
        )}
      >
        <div className="flex items-center">
          <SearchIcon height="16" width="16" />
          <Input placeholder="Title" {...register("title")} />
        </div>
        {/* <ErrorText>{errors.title?.message}</ErrorText> */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description ..." {...field} />
          )}
        />
        {/* <ErrorText>{errors.description?.message}</ErrorText> */}
        <Input placeholder="Image" type="file" />
        <Button>Submit new Property</Button>
      </form>
    </div>
  );
};

export default NewProperty;
