"use client";
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
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useReactFlow } from "@xyflow/react";
import { useFlowStore } from "@/store/store";

export function Handler() {
  const { zoomIn, zoomOut } = useReactFlow();
  const { addNode, nodes } = useFlowStore();
  const nodesLibrary = [
    {
      icon: Database,
      title: "Input",
      isDisabled: false,
      action() {
        console.log("input here");
      },
    },
    { icon: FileOutput, title: "Output", isDisabled: false },
    {
      icon: Settings,
      title: "Process",
      isDisabled: false,
      action() {
        addNode({
          id: `${nodes.length}`,
          data: {
            label: "hello",
            desc: "bla bla bla blac",
            processTypes: "helllllllllllllllll",
            jsonFormat: "idk",
          },
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "Process",
        });
      },
    },
    { icon: GitBranchPlus, title: "Conditional", isDisabled: false },
    { icon: Code, title: "Code", isDisabled: false },
    { icon: Mail, title: "Email", isDisabled: true },
    { icon: Funnel, title: "Filter", isDisabled: true },
    { icon: Workflow, title: "Sub-workflow", isDisabled: true },
    { icon: TableProperties, title: "Table", isDisabled: true },
  ];

  return (
    <div className="flex px-6 py-3 border gap-4 border-white/[.08] items-center  bg-[#060709] absolute z-10 bottom-10 rounded-lg left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-1">
        <Button variant={"ghost"} className="border border-white[.09]">
          <Undo />
        </Button>
        <Button variant={"ghost"} className="border border-white[.09]">
          <Redo />
        </Button>
      </div>
      <div className="w-[.5px] h-8 opacity-50 rounded-full bg-gray-800 border " />
      <div className="flex items-center gap-1">
        <Button
          onClick={() => zoomIn()}
          variant={"ghost"}
          className="border border-white[.09]"
        >
          <ZoomIn />
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => zoomOut()}
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
                onClick={() => item.action?.()}
                key={index}
                className={`my-1 border h-10 font-sans  ${
                  item.isDisabled
                    ? " cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
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
