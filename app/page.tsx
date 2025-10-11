import { EditorLayout } from "@/components/editor-layout";
import { SideBar } from "@/components/sideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex selection:bg-[#04201b]  selection:text-[#0bc5b3]   bg-[#060709] min-h-screen ">
      <SideBar />
      <EditorLayout />
    </div>
  );
}
