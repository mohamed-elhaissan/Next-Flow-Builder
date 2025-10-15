"use client";
import { ArrowUpFromLine, Play, Save } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function ActionButtons() {
  return (
    <div className="flex   gap-2  absolute z-20 right-7 top-7">
      <Button
        variant={"secondary"}
        className="cursor-pointer     dark:bg-[#111214] dark:hover:bg-[#111214c0] border text-foreground"
      >
        <Save />
        Save
      </Button>
      <Button
        variant={"secondary"}
        className="cursor-pointer   dark:bg-[#111214] dark:hover:bg-[#111214c0] border text-foreground"
      >
        <ArrowUpFromLine />
        Load
      </Button>
      <Button
        onClick={() => {
          toast.success("Execution completed successfully");
        }}
        className="cursor-pointer bg-[#fe9a00] hover:bg-[#fe9a00] hover:opacity-75"
      >
        <Play />
        Execute
      </Button>
    </div>
  );
}
