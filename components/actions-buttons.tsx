import { ArrowUpFromLine, Play, Save } from "lucide-react";
import { Button } from "./ui/button";

export function ActionButtons() {
  return (
    <div className="flex gap-2 fixed right-7 top-7">
      <Button className="cursor-pointer" variant={"outline"}>
        <Save />
        Save
      </Button>
      <Button className="cursor-pointer" variant={"outline"}>
        <ArrowUpFromLine />
        Load
      </Button>
      <Button className="cursor-pointer" variant={"secondary"}>
        <Play />
        Execute
      </Button>
    </div>
  );
}
