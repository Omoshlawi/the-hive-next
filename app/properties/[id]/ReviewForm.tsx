"use client";
import { Button } from "@/app/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReviewFormSkeleton from "./ReviewFormSkeleton";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import RatingInput from "@/app/components/form/RatingInput";

interface Props {
  propertyId: string;
}

const ReviewSchema = z.object({
  property: z.string(),
  rating: z.coerce.number(),
  comment: z.string(),
});

type PropertyReviewForm = z.infer<typeof ReviewSchema>;

const ReviewForm: React.FC<Props> = ({ propertyId }) => {
  const form = useForm<PropertyReviewForm>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: { comment: "", property: propertyId, rating: 3 },
  });
  async function onSubmit(values: PropertyReviewForm) {
    try {
      alert(JSON.stringify(values, null, 2));
    } catch (error) {}
  }
  return (
    <div>
      {form.formState.isSubmitting && <ReviewFormSkeleton />}
      {!form.formState.isSubmitting && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="property"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="hidden" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <RatingInput
                      editable
                      rating={value}
                      onRatingChange={onChange}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Rate us to scale of 5</FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what you think about this property ...."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full mt-5" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ReviewForm;
