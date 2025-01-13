import * as React from "react";
import { cn } from "@/lib/utils";

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "right" | "left";
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  (
    { className, children, open, onOpenChange, side = "right", ...props },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(open);

    React.useEffect(() => {
      setIsOpen(open);
      if (onOpenChange) onOpenChange(open || false);
    }, [open, onOpenChange]);

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
        )}
        <div
          ref={ref}
          className={cn(
            "fixed inset-y-0 z-50 w-72 bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out",
            side === "right" ? "right-0" : "left-0",
            isOpen
              ? "translate-x-0"
              : side === "right"
              ? "translate-x-full"
              : "-translate-x-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);
Sheet.displayName = "Sheet";

export { Sheet };
