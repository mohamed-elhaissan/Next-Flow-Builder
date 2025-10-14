"use client";

import { memo } from "react";
import { Settings } from "lucide-react";
import { customNode } from "@/types/node-types";
import { type NodeProps, Handle, Position } from "@xyflow/react";

export const ProcessNode = memo(
  ({ type, id, data, isConnectable }: NodeProps) => {
    return (
      <div className="px-4 py-2 shadow-md rounded-md dark:bg-black bg-white border-2 border-purple-500 min-w-[150px]">
        <div className="flex items-center">
          <div className="rounded-full w-8 h-8 flex items-center justify-center dark:bg-[#111214] dark:border  bg-purple-100 text-purple-500">
            <Settings className="h-4 w-4" />
          </div>
          <div className="ml-2">
            <div className="text-sm font-bold">
              {(data as any).label || "Process"}
            </div>
            <div className="text-xs text-gray-500">Data processing node</div>
          </div>
        </div>

        <Handle
          type="target"
          position={Position.Right}
          isConnectable={isConnectable}
          className="w-3 h-3 bg-purple-500"
        />
        <Handle
          type="source"
          position={Position.Left}
          isConnectable={isConnectable}
          className="w-3 h-3 bg-purple-500"
        />
      </div>
    );
  }
);
