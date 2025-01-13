"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toggleTheme } from "@/lib/theme";

const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/3d-models", label: "3D Models" },
    { href: "/components", label: "React Components" },
    { href: "/snippets", label: "Code Snippets" },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button variant="outline" onClick={toggleTheme}>
            Theme
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
