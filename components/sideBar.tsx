"use client";
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
import { useFlowStore } from "@/store/store";
import { useCallback } from "react";
import { DragEvent } from "react";

export function SideBar() {
  const { addNode, nodes } = useFlowStore();
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
    <div className="w-72 text-[#d4d4d4] flex flex-col gap-5 p-4 border-r border-white/[.09]">
      <h1 className="scroll-m-20   text-2xl font-extrabold tracking-tight text-balance">
        Workflow Nodes
      </h1>
      <div className="flex flex-col ">
        <span className="text-sm opacity-50">Menu</span>
        {nodesLibrary.map((item) => {
          return (
            <Button
              draggable={!item.isDisable}
              onDoubleClick={() => item.action?.()}
              onDragStart={(e) => onDragItem(e, "codeNode")}
              size={"lg"}
              disabled={item.isDisable}
              key={item.title}
              variant={"outline"}
              className={`justify-start my-1 border border-white/[0.08]  h-12 ${
                item.isDisable
                  ? "cursor-not-allowed opacity-50"
                  : " cursor-grab"
              }`}
            >
              <item.icon className="h-5 w-5" />
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
