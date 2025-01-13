import { Metadata } from "next";
import { Barriecito } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const barriecito = Barriecito({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collections | typicalmohit",
  description: "Browse through my collections of digital assets and components",
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="space-y-6">{children}</div>
      <div className="fixed bottom-8 right-8">
        <Link href="/">
          <Button size="lg" className="rounded-full shadow-lg group">
            <Home className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
            <span className={cn(barriecito.className, "ml-1")}>
              typicalmohit
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
