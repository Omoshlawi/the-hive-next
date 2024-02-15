"use client";

import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";

interface Props {
  rating?: number;
  editable?: boolean;
  maxRating?: number;
  onRatingChange?: (rating: number) => void;
}

const RatingInput: React.FC<Props> = ({
  rating: currRating = 3,
  editable = true,
  maxRating = 5,
  onRatingChange: setCurrRating,
}) => {
  return (
    <ul className="m-0 flex flex-col justify-center space-y-1 mb-2">
      {editable ? (
        Array.from({ length: maxRating }).map((_, index) => (
          <RadioGroup
            value={`${currRating}`}
            onValueChange={(value) => {
              setCurrRating?.(Number(value));
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={`${index + 1}`} id={`${index + 1}`} />
              <Label
                htmlFor={`${index + 1}`}
                className="items-center justify-center"
              >
                <RatingBar
                  rating={index + 1}
                  maxRating={maxRating}
                  key={index}
                  showOutlined={false}
                />
              </Label>
            </div>
          </RadioGroup>
        ))
      ) : (
        <RatingBar
          rating={currRating}
          maxRating={maxRating}
          showOutlined={true}
        />
      )}
    </ul>
  );
};

const RatingBar = ({
  maxRating,
  rating,
  showOutlined,
}: {
  rating: number;
  maxRating: number;
  showOutlined: boolean;
}) => (
  <ul className="m-0 flex items-center p-0 font-medium space-x-1">
    {Array.from({ length: rating }).map((val, index) => (
      <StarFilled key={index} />
    ))}
    {showOutlined &&
      Array.from({ length: maxRating - rating }).map((val, index) => (
        <StarOutlined key={index} />
      ))}
    <li className="ml-2 inline text-base">({rating})</li>
  </ul>
);

const StarFilled = () => (
  <li className="inline text-yellow-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  </li>
);

const StarOutlined = () => (
  <li className="inline text-yellow-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  </li>
);

export default RatingInput;
