import { Plus, Redo, Undo, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  Code,
  Database,
  FileOutput,
  Funnel,
  GitBranchPlus,
  Mail,
  Settings,
  TableProperties,
  Workflow,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Handler() {
  const nodesLibrary = [
    { icon: Database, title: "Input" },
    { icon: FileOutput, title: "Output" },
    { icon: Settings, title: "Process" },
    { icon: GitBranchPlus, title: "Conditional" },
    { icon: Code, title: "Code" },
    { icon: Mail, title: "Email" },
    { icon: Funnel, title: "Filter" },
    { icon: Workflow, title: "Sub-workflow" },
    { icon: TableProperties, title: "Table" },
  ];

  return (
    <div className="flex px-6 py-3 border gap-4 border-white/[.08] items-center  bg-[#060709] absolute bottom-10 rounded-lg left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-1">
        <Button
          variant={"ghost"}
          className="border border-white[.09]"
          
        >
          <Undo />
        </Button>
        <Button
          variant={"ghost"}
          className="border border-white[.09]"
          
        >
          <Redo />
        </Button>
      </div>
      <div className="w-[.5px] h-8 opacity-50 rounded-full bg-gray-800 border " />
      <div className="flex items-center gap-1">
        <Button
          variant={"ghost"}
          className="border border-white[.09]"
          
        >
          <ZoomIn />
        </Button>
        <Button
          variant={"ghost"}
          className="border border-white[.09]"
          
        >
          <ZoomOut />
        </Button>
      </div>
      <div className="w-[.5px] h-8 opacity-50 rounded-full bg-gray-800 border " />
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-53">
          <Button
            variant={"secondary"}
            className="border cursor-pointer  border-white[.09]"
            
          >
            <Plus />
            Quick Add
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-53 ">
          {nodesLibrary.map((item, index) => {
            return (
              <DropdownMenuItem
                key={index}
                className="my-1 border h-10 font-sans cursor-pointer"
              >
                {<item.icon />} {item.title}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
