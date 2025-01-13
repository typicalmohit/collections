import * as React from "react";
import { cn } from "@/lib/utils";

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    defaultValue?: string;
  }
>(({ className, defaultValue, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
      data-value={value}
    />
  );
});
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string;
  }
>(({ className, value, ...props }, ref) => {
  const tabs = React.useContext(TabsContext);
  const isSelected = tabs?.value === value;

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSelected
          ? "bg-background text-foreground shadow"
          : "hover:bg-background/50 hover:text-foreground",
        className
      )}
      {...props}
      onClick={() => tabs?.onValueChange?.(value)}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string;
  }
>(({ className, value, ...props }, ref) => {
  const tabs = React.useContext(TabsContext);
  const isSelected = tabs?.value === value;

  if (!isSelected) return null;

  return (
    <div
      ref={ref}
      role="tabpanel"
      className={cn("mt-2", className)}
      {...props}
    />
  );
});
TabsContent.displayName = "TabsContent";

const TabsContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
} | null>(null);

export { Tabs, TabsList, TabsTrigger, TabsContent };
