import React from "react";

interface SummaryCardProps {
  icon: any;
  title: string;
  subTitle: string;
}

const SummaryCardSkeleton = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryCardConcrete: React.FC<SummaryCardProps> = ({
  icon: Icon,
  subTitle,
  title,
}) => {
  return (
    <div className="p-5 border-2 rounded-lg flex items-center space-x-3">
      <div className="rounded-full border p-5">
        <Icon className="w-8 h-8" />
      </div>
      <div className="flex flex-col">
        <div className={"font-bold"}>{title}</div>
        <div className="text-slate-500 text-lg">{subTitle}</div>
      </div>
    </div>
  );
};

const SummaryCard = { SummaryCardConcrete, SummaryCardSkeleton };

export default SummaryCard;
