import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar, { SidebarProvider } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ClientMainContent } from "@/components/client-main-content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "typicalmohit",
  description: "A collection of digital assets and components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SidebarProvider>
          <div className="relative min-h-screen bg-gradient-to-br from-background to-muted/20">
            <ThemeToggle />
            <Sidebar />
            <ClientMainContent>{children}</ClientMainContent>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
