import { CodeNode } from "@/components/nodes/code-node";
import { ConditionNode } from "@/components/nodes/condition-node";
import { InputNode } from "@/components/nodes/input-node";
import { OutputNode } from "@/components/nodes/output-node";
import { ProcessNode } from "@/components/nodes/process-node";

export const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  processNode: ProcessNode,
  conditionNode: ConditionNode,
  codeNode: CodeNode,
};

interface IInput {
  id: string;
  type: string;
  data: {
    label: string;
    desc: string;
    dataSource: string;
    jsonCode: string;
  };
}
interface IOutput {
  id: string;
  data: {
    label: string;
    desc: string;
    outputTypes: string;
    jsonFormat: string;
  };
  position: {
    x: number;
    y: number;
  };
  type: string;
}
interface IProcess {
  id: string;
  data: {
    label: string;
    desc: string;
    processTypes: string;
    jsonFormat: string;
  };
  type: string;
}
interface ICode {
  id: string;
  data: {
    label: string;
    desc: string;
    language: "Javascript" | "Typescript";
    code: string;
  };
  type: string;
}
interface ICondition {
  id: string;
  data: {
    label: string;
    desc: string;
    condition: string;
    truePath: boolean;
    falsePath: boolean;
  };
  type: string;
}

export type customNode = IInput | IOutput | ICondition | ICode | IProcess;
