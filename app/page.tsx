import { EditorLayout } from "@/components/editor-layout";
import { SideBar } from "@/components/sideBar";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="font-sans flex selection:bg-[#04201b] bg-white  selection:text-[#0bc5b3]   dark:bg-[#060709] min-h-screen ">
      <Toaster richColors position="bottom-center" />
      <SideBar />
      <EditorLayout />
    </div>
  );
}
