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

import { Button } from "./ui/button";

export function SideBar() {
  const nodesLibrary = [
    {
      icon: Database,
      title: "Input",
      isDisable: false,
      desc: "Data input node",
    },
    {
      icon: FileOutput,
      title: "Output",
      isDisable: false,
      desc: "Data output node",
    },
    {
      icon: Settings,
      title: "Process",
      isDisable: false,
      desc: "Data processing node",
    },
    {
      icon: GitBranchPlus,
      title: "Conditional",
      isDisable: false,
      desc: "Conditional branching",
    },
    {
      icon: Code,
      title: "Code",
      isDisable: false,
      desc: "Custom code execution",
    },
    {
      icon: Mail,
      title: "Email",
      isDisable: true,
      desc: "Send email notification",
    },
    {
      icon: Funnel,
      title: "Filter",
      isDisable: true,
      desc: "Filter data",
    },
    {
      icon: Workflow,
      title: "Sub-workflow",
      isDisable: true,
      desc: "Nested workflow",
    },
    {
      icon: TableProperties,
      title: "Table",
      isDisable: true,
      desc: "Database table operation",
    },
  ];
  return (
    <div className="w-72 text-[#d4d4d4] flex flex-col gap-5 p-4 border-r border-white/[.09]">
      <h1 className="scroll-m-20   text-2xl font-extrabold tracking-tight text-balance">
        Workflow Nodes
      </h1>
      <div className="flex flex-col ">
        <span className="text-sm opacity-50">Menu</span>
        {nodesLibrary.map((item) => {
          return (
            <Button
              size={"lg"}
              key={item.title}
              variant={"outline"}
              className={`justify-start my-1 border border-white/[0.08]  h-12 ${
                item.isDisable
                  ? "cursor-not-allowed opacity-50"
                  : " cursor-grab"
              }`}
            >
              <item.icon />
              <div className="flex items-start  justify-start flex-col">
                <span>{item.title}</span>
                <span className="text-zinc-400 text-sm">{item.desc}</span>
              </div>
            </Button>
          );
        })}
      </div>
      <span className="text-sm opacity-50">
        Drag and drop or double click nodes onto the canvas to build your
        workflow
      </span>
    </div>
  );
}
