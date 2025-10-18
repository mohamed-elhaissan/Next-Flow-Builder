"use client";

import { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  applyEdgeChanges,
  addEdge,
  Background,
  Node,
  Edge,
  Connection,
  EdgeChange,
  NodeChange,
  applyNodeChanges,
  NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { customNode, nodeTypes } from "../types/node-types";
import { useFlowStore } from "@/store/store";

import { useDropHandler } from "@/hooks/useDropHandler";
import { NodeConfigPanel } from "./node-config-panel";

const initialEdges: Edge[] = [];

export function Canvas() {
  const { nodes: storeNodes } = useFlowStore();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const { onDrop } = useDropHandler();

  useEffect(() => {
    setNodes((currentNodes) => {
      const positionMap = new Map(
        currentNodes.map((node) => [node.id, node.position])
      );

      const reactFlowNodes: Node[] = storeNodes.map((node) => ({
        id: node.id,
        type: node.type,
        position: positionMap.get(node.id) || {
          x: Math.random() * 400,
          y: Math.random() * 400,
        },
        data: node as unknown as Record<string, unknown>,
      }));

      return reactFlowNodes;
    });
  }, [storeNodes]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        // onNodeDoubleClick={(e, node) => {
        //   setSelectedNode(node.type);
        // }}
        edges={edges}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
      </ReactFlow>
      {selectedNode && (
        <div className=" absolute right-0 top-[20%] dark:bg-[#060709] p-4 rounded-md border">
          {/* <NodeConfigPanel node={selectedNode} /> */}
        </div>
      )}
    </div>
  );
}
