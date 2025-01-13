"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Barriecito } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Box, Code, Component, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const barriecito = Barriecito({
  weight: "400",
  subsets: ["latin"],
});

interface Collection {
  title: string;
  description: string;
  href: string;
  color: string;
  icon: LucideIcon;
}

const collections: Collection[] = [
  {
    title: "3D Models",
    description: "Browse through my collection of 3D models and assets",
    href: "/collections/3d-models",
    color: "hover:bg-blue-500/10",
    icon: Box,
  },
  {
    title: "Shadcn UI",
    description: "Collection of shadcn/ui components and their usage",
    href: "/collections/shadcn",
    color: "hover:bg-purple-500/10",
    icon: Palette,
  },
  {
    title: "React Components",
    description: "Reusable React components for your next project",
    href: "/collections/react",
    color: "hover:bg-green-500/10",
    icon: Component,
  },
  {
    title: "Code Snippets",
    description: "Useful code snippets and utilities",
    href: "/collections/snippets",
    color: "hover:bg-orange-500/10",
    icon: Code,
  },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-baseline gap-2">
          <span className={barriecito.className}>typicalmohit</span>
          <span className="text-xl text-muted-foreground">Collections</span>
        </h1>
        <p className="text-muted-foreground">
          Some of my favourite collections of digital assets.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collections.map((collection) => {
          const Icon = collection.icon;
          return (
            <Link
              key={collection.href}
              href={collection.href}
              className="block group"
            >
              <Card
                className={cn(
                  "overflow-hidden transition-all duration-300 hover:shadow-lg h-full",
                  collection.color
                )}
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium">
                      {collection.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xs mt-1.5 line-clamp-2">
                    {collection.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
