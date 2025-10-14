"use client";

import { memo } from "react";
import { FileOutput } from "lucide-react";
import { type NodeProps, Handle, Position } from "@xyflow/react";

export const OutputNode = memo(({ data, isConnectable }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md dark:bg-black bg-white border-2 border-green-500 min-w-[150px]">
      <div className="flex items-center">
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-green-100 text-green-500">
          <FileOutput className="h-4 w-4" />
        </div>
        <div className="ml-2">
          <div className="text-sm font-bold">
            {(data as any).label || "Output"}
          </div>
          <div className="text-xs text-gray-500">
            {(data as any).description || "( data as any) output node"}
          </div>
        </div>
      </div>

      {(data as any).outputType && (
        <div className="mt-2 text-xs bg-gray-100 p-1 rounded">
          Output: {(data as any).outputType} (
          {(data as any).outputFormat || "json"})
        </div>
      )}

      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-green-500"
      />
    </div>
  );
});

OutputNode.displayName = "OutputNode";
