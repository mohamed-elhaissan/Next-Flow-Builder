"use client";
import { Textarea } from "@/components/ui/textarea";

interface CodeEditorProps {
  value: string;
}

export default function CodeEditor({
  value,
}: CodeEditorProps) {
  return (
    <Textarea
      value={value}
      className="font-mono text-sm h-64 whitespace-pre"
      spellCheck={false}
    />
  );
}
