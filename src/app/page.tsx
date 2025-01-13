"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to My Collections</h1>
        <p className="text-muted-foreground">
          Browse through my digital assets and components.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/collections/3d-models">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>3D Models</CardTitle>
              <CardDescription>
                Browse through my collection of 3D models and assets.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/collections/react">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>React Components</CardTitle>
              <CardDescription>
                Explore my library of reusable React components.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/collections/snippets">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>Code Snippets</CardTitle>
              <CardDescription>
                View my collection of useful code snippets.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/collections/shadcn">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                Check out my shadcn/ui component implementations.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
