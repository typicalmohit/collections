"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Barriecito } from "next/font/google";
import {
  Box,
  Palette,
  Component,
  Code,
  ArrowUpRight,
  Sparkle,
} from "lucide-react";

const barriecito = Barriecito({
  weight: "400",
  subsets: ["latin"],
});

const collections = [
  {
    title: "3D Models",
    description: "3D models and assets",
    href: "/collections/3d-models",
    icon: Box,
    gradient:
      "from-blue-500/10 via-indigo-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:via-indigo-500/20 hover:to-cyan-500/20",
    iconClassName: "text-blue-500",
  },
  {
    title: "UI Components",
    description: "Collection of shadcn/ui components and their usage",
    href: "/collections/shadcn",
    icon: Palette,
    gradient:
      "from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 hover:from-purple-500/20 hover:via-fuchsia-500/20 hover:to-pink-500/20",
    iconClassName: "text-purple-500",
  },
  {
    title: "React Components",
    description: "Reusable React components for your next project",
    href: "/collections/react",
    icon: Component,
    gradient:
      "from-green-500/10 via-teal-500/10 to-emerald-500/10 hover:from-green-500/20 hover:via-teal-500/20 hover:to-emerald-500/20",
    iconClassName: "text-green-500",
  },
  {
    title: "Code Snippets",
    description: "Useful code snippets and utilities",
    href: "/collections/snippets",
    icon: Code,
    gradient:
      "from-orange-500/10 via-amber-500/10 to-yellow-500/10 hover:from-orange-500/20 hover:via-amber-500/20 hover:to-yellow-500/20",
    iconClassName: "text-orange-500",
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkle className="h-6 w-6 text-primary animate-pulse" />
          <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
            <span className={cn(barriecito.className)}>typicalmohit</span>
            <span className="text-xl text-muted-foreground font-normal">
              Collections
            </span>
          </h1>
        </div>
        <p className="text-base text-muted-foreground">
          A curated collection of digital assets, components, and code snippets
          for your next project.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collections.map((collection) => {
          const Icon = collection.icon;
          return (
            <Link
              key={collection.href}
              href={collection.href}
              className="block group relative"
            >
              <Card
                className={cn(
                  "overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]",
                  "bg-gradient-to-br border-transparent relative",
                  collection.gradient
                )}
              >
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "p-1.5 rounded-md bg-background/50 backdrop-blur-sm",
                          collection.iconClassName
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-sm font-medium">
                        {collection.title}
                      </CardTitle>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
