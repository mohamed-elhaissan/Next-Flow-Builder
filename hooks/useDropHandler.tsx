import { useFlowStore } from "@/store/store";
import { customNode } from "@/types/node-types";
import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { toast } from "sonner";

export const useDropHandler = () => {
  const reactFlowInstance = useReactFlow();
  const { addNode, nodes } = useFlowStore();
  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) {
      toast.error("Undefined Flow Type :) ! try later Please");
      return;
    }
    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });
    const id = nodes.length.toString();
    switch (type) {
      case "inputNode": {
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

        break;
      }

      case "outputNode": {
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
        break;
      }

      case "processNode": {
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

        break;
      }

      case "codeNode": {
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
          type: "codeNode",
        });
        break;
      }

      case "conditionNode": {
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
          type: "conditionNode",
        });
        break;
      }

      default:
        toast.error(`Unknown node type: ${type}`);
    }
  }, []);
  return {
    onDrop,
  };
};
