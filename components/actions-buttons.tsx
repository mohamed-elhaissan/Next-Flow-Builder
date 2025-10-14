import { ArrowUpFromLine, Play, Save } from "lucide-react";
import { Button } from "./ui/button";

export function ActionButtons() {
  return (
    <div className="flex   gap-2  absolute z-20 right-7 top-7">
      <Button className="cursor-pointer     bg-[#111214] hover:bg-[#111214c0] border text-foreground">
        <Save />
        Save
      </Button>
      <Button className="cursor-pointer   bg-[#111214] hover:bg-[#111214c0] border text-foreground">
        <ArrowUpFromLine />
        Load
      </Button>
      <Button className="cursor-pointer" size={"sm"}>
        <Play />
        Execute
      </Button>
    </div>
  );
}
