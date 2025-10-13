"use client";

import { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  applyEdgeChanges,
  addEdge,
  Controls,
  Background,
  Node,
  Edge,
  Connection,
  EdgeChange,
  NodeChange,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { nodeTypes } from "../types/node-types";
import { useFlowStore } from "@/store/store";

const initialEdges: Edge[] = [];

export function Canvas() {
  const { nodes: storeNodes } = useFlowStore();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    setNodes((currentNodes) => {
      const positionMap = new Map(
        currentNodes.map((node) => [node.id, node.position])
      );

      const reactFlowNodes: Node[] = storeNodes.map((node) => ({
        id: node.id,
        type: "processNode",
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
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
