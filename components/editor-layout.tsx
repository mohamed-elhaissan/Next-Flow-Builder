import { ReactFlowProvider } from "@xyflow/react";
import { ActionButtons } from "./actions-buttons";
import { Canvas } from "./Canvas";

export function EditorLayout() {
  return (
    <div className="flex-1 p-4 ">
      <ReactFlowProvider>
        <div className="dark:bg-[#0f0f11] bg-[#f9fafb] border  relative h-full rounded-lg border border-white/[.08]">
          <ActionButtons />

          <Canvas />
        </div>
      </ReactFlowProvider>
    </div>
  );
}
