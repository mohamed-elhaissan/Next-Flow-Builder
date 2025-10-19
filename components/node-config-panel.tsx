"use client";

import { useState } from "react";
import { Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import CodeEditor from "./code-editor";
import { Node } from "@xyflow/react";

interface NodeConfigPanelProps {
  node: Node;
  //   updateNodeData: (nodeId: string, data: any) => void;
  //   onClose: () => void;
}

export function NodeConfigPanel({
  node,
}: //   updateNodeData,
//   onClose,
NodeConfigPanelProps) {
  //   const [localData, setLocalData] = useState({ ...node.data });

  const renderInputFields = () => {
    switch (node.type) {
      case "inputNode":
        return (
          <div className="flex flex-col gap-2">
            <div className="space-y-2">
              <Label htmlFor="dataSource">Data Source</Label>
              <Select>
                <SelectTrigger id="dataSource">
                  <SelectValue placeholder="Select data source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manual">Manual Input</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="file">File Upload</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sampleData">Sample Data (JSON)</Label>
              <Textarea
                id="sampleData"
                className="h-32"
                placeholder='{"key": "value"}'
              />
            </div>
          </div>
        );

      case "outputNode":
        return (
          <>
            <div className="space-y-2 mb-2">
              <Label htmlFor="outputType">Output Type</Label>
              <Select>
                <SelectTrigger id="outputType">
                  <SelectValue placeholder="Select output type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="console">Console</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="file">File</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="outputFormat">Output Format</Label>
              <Select>
                <SelectTrigger id="outputFormat">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="xml">XML</SelectItem>
                  <SelectItem value="text">Plain Text</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );

      case "processNode":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="processType">Process Type</Label>
              <Select>
                <SelectTrigger id="processType">
                  <SelectValue placeholder="Select process type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transform">Transform</SelectItem>
                  <SelectItem value="filter">Filter</SelectItem>
                  <SelectItem value="aggregate">Aggregate</SelectItem>
                  <SelectItem value="sort">Sort</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="processConfig">
                Process Configuration (JSON)
              </Label>
              <Textarea
                id="processConfig"
                className="h-32"
                placeholder='{"operation": "value"}'
              />
            </div>
          </>
        );

      case "conditionalNode":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Input id="condition" placeholder="data.value > 10" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trueLabel">True Path Label</Label>
              <Input id="trueLabel" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="falseLabel">False Path Label</Label>
              <Input id="falseLabel" />
            </div>
          </>
        );

      case "codeNode":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="codeLanguage">Language</Label>
              <Select>
                <SelectTrigger id="codeLanguage">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">Code</Label>
              <CodeEditor
                value={
                  "// Write your code here\nfunction process(data) {\n  // Transform data\n  return data;\n}"
                }
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Configure {}</h2>
        <Button variant="ghost" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto">
        <div className="space-y-2">
          <Label htmlFor="label">Node Label</Label>
          <Input id="label" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe what this node does"
          />
        </div>

        <div className="flex items-center space-x-2 py-2">
          <Switch id="required" />
          <Label htmlFor="required">Required Node</Label>
        </div>

        <div className="border-t border-gray-200 my-4"></div>
      </div>
      {renderInputFields()}
      <Button className="mt-2">
        <Save />
        Save
      </Button>
      <Button variant={"ghost"}>Cancel</Button>
    </div>
  );
}
