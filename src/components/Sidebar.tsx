"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createContext, useContext, useState } from "react";
import {
  Home,
  Box,
  Component,
  Code,
  ChevronRight,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type SidebarContextType = {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
}

const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useSidebar();
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/collections/3d-models", label: "3D Models", icon: Box },
    { href: "/collections/react", label: "React Components", icon: Component },
    { href: "/collections/snippets", label: "Code Snippets", icon: Code },
    { href: "/collections/shadcn", label: "UI Components", icon: Palette },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-background/50 backdrop-blur-xl border-r",
        "transition-all duration-300 flex flex-col z-40",
        isExpanded ? "w-64" : "w-16"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute -right-3 top-6 h-6 w-6 rounded-full border shadow-sm bg-background",
          "hover:bg-accent hover:text-accent-foreground"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronRight
          className={cn(
            "h-3 w-3 transition-transform",
            isExpanded ? "rotate-180" : ""
          )}
        />
      </Button>

      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Menu Section */}
        {isExpanded && (
          <div className="text-xs font-medium text-muted-foreground px-2 mb-2">
            Menu
          </div>
        )}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center h-9 px-2 rounded-md text-sm transition-colors relative",
                  "hover:bg-accent/50 hover:text-accent-foreground",
                  isActive &&
                    "bg-primary text-primary-foreground font-medium shadow-sm"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {isExpanded && (
                  <span className="ml-3 text-sm">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
