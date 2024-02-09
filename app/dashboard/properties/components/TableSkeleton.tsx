import { Card } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import { Skeleton } from "@/app/components/ui/skeleton";
import React from "react";

interface Props {
  rows: number;
  cols: number;
}

const TableSkeleton: React.FC<Props> = ({ cols, rows }) => {
  return (
    <Card>
      <div className={`grid grid-cols-${cols} gap-4 m-3`}>
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-9 rounded-full" />
        ))}
      </div>
      <Separator />
      <div>
        {Array.from({ length: rows }).map((_, i) => (
          <div className={`grid grid-cols-${cols} gap-4 m-3`} key={i}>
            {Array.from({ length: cols }).map((_, i) => (
              <Skeleton className="h-8 " key={i} />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TableSkeleton;
