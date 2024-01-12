import { Card, CardHeader } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";
import { Skeleton } from "@/app/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { range } from "lodash";
import React from "react";

interface Props {
  rows: number;
  cols: number;
}

const TableSkeleton: React.FC<Props> = ({ cols, rows }) => {
  return (
    <Card>
      <div className={`grid grid-cols-${cols} gap-4 m-3`}>
        {range(0, cols).map((_, i) => (
          <Skeleton key={i} className="h-9 rounded-full" />
        ))}
      </div>
      <Separator />
      <div>
        {range(0, rows).map((_, i) => (
          <div className={`grid grid-cols-${cols} gap-4 m-3`} key={i}>
            {range(0, cols).map((_, i) => (
              <Skeleton className="h-8 " key={i} />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TableSkeleton;
