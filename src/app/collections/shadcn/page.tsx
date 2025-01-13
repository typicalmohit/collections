"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentShowcase {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
}

export default function ShadcnPage() {
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (code: string, title: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const components: ComponentShowcase[] = [];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Shadcn UI Components
        </h1>
        <p className="text-muted-foreground">
          A collection of pre-built components using shadcn/ui.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {components.map((component) => (
          <Card key={component.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{component.title}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setActiveCode(
                      activeCode === component.title ? null : component.title
                    )
                  }
                >
                  <Code className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 rounded-lg border bg-card">
                {component.component}
              </div>
              {activeCode === component.title && (
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                    <code className="text-sm">{component.code}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => handleCopy(component.code, component.title)}
                  >
                    {copiedCode === component.title ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
