import { ActionButtons } from "./actions-buttons";
import { Handler } from "./handler";

export function EditorLayout() {
  return (
    <div className="flex-1 p-4 ">
      <div className="bg-[#0f0f11] relative h-full rounded-lg border border-white/[.08]">
        <ActionButtons />
        <Handler />
      </div>
    </div>
  );
}
