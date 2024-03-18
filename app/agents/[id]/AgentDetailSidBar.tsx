import { Separator } from "@/app/components/ui/separator";
import { lusitana } from "@/app/fonts";
import { Agent } from "@/app/lib/entities/agents";
import clsx from "clsx";
import { Badge } from "lucide-react";
import React from "react";

interface Props {
  agent: Agent;
}

const AgentDetailSidBar: React.FC<Props> = ({ agent }) => {
  return (
    <div className="shadow-gray-800 shadow-sm rounded-sm flex flex-col items-center  relative overflow-hidden">
      {/* Background   */}
      <div className="w-full h-full absolute flex flex-col -z-10">
        <div className="h-48 w-full bg-gray-500 dark:bg-gray-800" />
        <div className="h-full bg-background" />
      </div>
      {/* EndBackground */}
      <img
        src={`/api/proxy/files/${agent.profilePic.path}`}
        alt={agent.firstName}
        className="rounded-full h-56 w-56 mt-5 bg-indigo-800 object-cover"
      />
      <div className="w-full grid grid-cols-1 gap-2 p-4">
        <span
          className={clsx(
            lusitana.className,
            "text-2xl hover:text-indigo-600 font-medium duration-500 ease-in-out text-center"
          )}
        >
          {`${agent.firstName} ${agent.lastName}`}
        </span>
        <div className="flex justify-center">
          <span>Aprroved</span>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailSidBar;
