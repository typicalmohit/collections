"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "./Sidebar";

export function ClientMainContent({ children }: { children: React.ReactNode }) {
  const { isExpanded } = useSidebar();

  return (
    <main
      className={cn(
        "transition-all duration-300",
        isExpanded ? "pl-64" : "pl-16"
      )}
    >
      <div className="max-w-[1500px] mx-auto py-8 px-4 lg:px-8">{children}</div>
    </main>
  );
}
