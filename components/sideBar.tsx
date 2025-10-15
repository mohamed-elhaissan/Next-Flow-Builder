"use client";
import {
  Code,
  Database,
  FileOutput,
  Funnel,
  GitBranchPlus,
  Mail,
  PanelRight,
  Settings,
  TableProperties,
  Workflow,
} from "lucide-react";

import { Button } from "./ui/button";
import { useFlowStore } from "@/store/store";
import { useCallback } from "react";
import { DragEvent } from "react";
import { ModeToggle } from "./theme-toggle";
import { useSidebarState } from "@/store/side-bar-state";

export function SideBar() {
  const { addNode } = useFlowStore();
  const { open, setOpen } = useSidebarState();
  const nodesLibrary = [
    {
      icon: Database,

      action() {
        addNode({
          id: `input-${Date.now()}`,
          data: {
            label: "Input Node",
            desc: "Input data source",
            dataSource: "",
            jsonCode: "",
          },
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "inputNode",
        });
      },
      title: "Input",
      isDisable: false,
      desc: "Data input node",
    },
    {
      icon: FileOutput,
      action() {
        addNode({
          id: `output-${Date.now()}`,
          data: {
            label: "Output Node",
            desc: "Output destination",
            outputTypes: "",
            jsonFormat: "",
          },
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "outputNode",
        });
      },
      title: "Output",
      isDisable: false,
      desc: "Data output node",
    },
    {
      icon: Settings,
      title: "Process",
      action() {
        addNode({
          id: `process-${Date.now()}`,
          data: {
            label: "Process Node",
            desc: "Process data",
            processTypes: "Data Processing",
            jsonFormat: "{}",
          },
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "processNode",
        });
      },
      isDisable: false,
      desc: "Data processing node",
    },
    {
      icon: GitBranchPlus,
      title: "Conditional",
      action() {
        addNode({
          id: `condition-${Date.now()}`,
          data: {
            label: "Condition Node",
            desc: "Conditional logic",
            condition: "",
            truePath: false,
            falsePath: false,
          },
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "conditionNode",
        });
      },
      isDisable: false,
      desc: "Conditional branching",
    },
    {
      icon: Code,
      title: "Code",
      action() {
        addNode({
          id: `code-${Date.now()}`,
          data: {
            label: "Code Node",
            desc: "Execute custom code",
            language: "Typescript",
            code: "// Write your code here",
          },
          position: {
            x: Math.random() * 400,
            y: Math.random() * 400,
          },
          type: "codeNode",
        });
      },
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
  const onDragItem = useCallback((e: DragEvent, nodeType: string) => {
    e.dataTransfer.setData("application/reactflow", nodeType);
    e.dataTransfer.effectAllowed = "move";
  }, []);
  return (
    <div
      className={`${
        open ? "w-72" : "w-16"
      } text-[#d4d4d4] flex flex-col justify-between transition-all duration-300 ease-in-out gap-5 p-4 border-r dark:border-white/[.09] border-black/[0.09]`}
    >
      <div className="flex flex-col gap-5">
        <h1 className="scroll-m-20 text-black flex  items-center justify-between dark:text-[#e5e5e5]   text-2xl font-extrabold tracking-tight text-balance">
          {open ? "Workflow Nodes" : ""}
          <Button
            onClick={() => setOpen()}
            variant={"ghost"}
            size={"icon"}
            className="cursor-pointer"
          >
            <PanelRight className="h-5 w-5" />
          </Button>
        </h1>
        <div className="flex flex-col ">
          <span className="text-sm opacity-50 text-black dark:text-[#e5e5e5]">
            Menu
          </span>
          {nodesLibrary.map((item) => {
            return (
              <Button
                draggable={!item.isDisable}
                onDoubleClick={() => item.action?.()}
                onDragStart={(e) =>
                  onDragItem(
                    e,
                    item.title == "Conditional"
                      ? "conditionNode"
                      : item.title.toLowerCase() + "Node"
                  )
                }
                size={"lg"}
                disabled={item.isDisable}
                key={item.title}
                variant={"outline"}
                className={`${
                  open ? "justify-start" : "justify-center"
                } my-1 border border-black/[0.08] dark:border-white/[0.08]  h-12 ${
                  item.isDisable
                    ? "cursor-not-allowed opacity-50"
                    : " cursor-grab"
                }`}
              >
                <item.icon className="h-5 w-5 text-black dark:text-[#e5e5e5]" />
                {open && (
                  <div className="flex items-start  justify-start flex-col">
                    <span className="text-black dark:text-[#e5e5e5]">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-sm">{item.desc}</span>
                  </div>
                )}
              </Button>
            );
          })}
        </div>
        {open && (
          <span className="text-sm opacity-50 text-black">
            Drag and drop or double click nodes onto the canvas to build your
            workflow
          </span>
        )}
      </div>
      <ModeToggle />
    </div>
  );
}
