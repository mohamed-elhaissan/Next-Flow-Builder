import { create } from "zustand";
import { customNode } from "@/types/node-types";

interface INodeState {
  nodes: customNode[];
  addNode: (newNode: customNode) => void;
  updateNode: (id: string) => void;
  deleteNode: (id: string) => void;
}

export const useFlowStore = create<INodeState>((set) => ({
  nodes: [],
  addNode: (node: customNode) =>
    set((state) => ({ nodes: [...state.nodes, node] })),
  updateNode: (id: string) => set((state) => ({ nodes: state.nodes })),
  deleteNode: (id: string) =>
    set((state) => ({ nodes: state.nodes.filter((node) => node.id !== id) })),
}));
