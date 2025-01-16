"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronDown, ChevronRight, ExternalLink, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { mainGroups, resources } from "@/app/collections/3d-models/resources";

export default function ModelsPage() {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(
    mainGroups.map((group) => group.title)
  );
  const [expandedSubgroups, setExpandedSubgroups] = useState<string[]>(
    mainGroups.flatMap((group) => group.subgroups.map((sub) => sub.title))
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedSubgroup, setSelectedSubgroup] = useState<string | null>(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const toggleSubgroup = (title: string) => {
    setExpandedSubgroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const scrollToSection = (groupTitle: string, subgroupTitle: string) => {
    setSelectedGroup(groupTitle);
    setSelectedSubgroup(subgroupTitle);
    const element = document.getElementById(`${groupTitle}-${subgroupTitle}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "mr-64" : "mr-0"
        }`}
      >
        <div className="space-y-6 p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              3D Model Resources
            </h2>
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-accent rounded-md"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Main Groups */}
          <div className="space-y-8">
            {mainGroups.map((mainGroup) => (
              <div key={`group-${mainGroup.title}`} className="space-y-4">
                {/* Main Group Header */}
                <button
                  onClick={() => toggleGroup(mainGroup.title)}
                  className="flex items-center space-x-2 w-full text-left border-b pb-2"
                >
                  {expandedGroups.includes(mainGroup.title) ? (
                    <ChevronDown className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  )}
                  <h3 className="text-xl font-medium tracking-tight">
                    {mainGroup.title}
                  </h3>
                </button>

                {/* Subgroups */}
                {expandedGroups.includes(mainGroup.title) && (
                  <div className="space-y-6 pl-4">
                    {mainGroup.subgroups.map((subgroup) => (
                      <div
                        key={`subgroup-${mainGroup.title}-${subgroup.title}`}
                        className="space-y-3"
                        id={`${mainGroup.title}-${subgroup.title}`}
                      >
                        <button
                          onClick={() => toggleSubgroup(subgroup.title)}
                          className="flex items-center space-x-2 w-full text-left"
                        >
                          {expandedSubgroups.includes(subgroup.title) ? (
                            <ChevronDown className="h-3.5 w-3.5 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
                          )}
                          <h4 className="text-lg font-medium tracking-tight">
                            {subgroup.title}
                          </h4>
                        </button>

                        {/* Resources Grid */}
                        {expandedSubgroups.includes(subgroup.title) && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 pl-4">
                            {subgroup.resources.map((resource, index) => (
                              <Link
                                key={`${mainGroup.title}-${subgroup.title}-${resource.title}-${index}`}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                              >
                                <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full bg-card">
                                  <div className="flex p-3">
                                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                                      <Image
                                        src={resource.imageUrl}
                                        alt={resource.title}
                                        width={40}
                                        height={40}
                                        className="object-contain w-full h-full p-1"
                                      />
                                    </div>
                                    <div className="ml-3 flex-grow min-w-0">
                                      <h3 className="font-medium text-sm truncate">
                                        {resource.title}
                                      </h3>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {resource.description}
                                      </p>
                                    </div>
                                  </div>
                                </Card>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-card border-l transform transition-transform duration-300 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <ThemeToggle />
            <h3 className="font-semibold text-lg">Navigation</h3>
          </div>
          <div className="space-y-2">
            {mainGroups.map((mainGroup) => (
              <div key={`nav-group-${mainGroup.title}`} className="space-y-1">
                <button
                  onClick={() => toggleGroup(mainGroup.title)}
                  className="flex items-center space-x-2 w-full text-left"
                >
                  {expandedGroups.includes(mainGroup.title) ? (
                    <ChevronDown className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5" />
                  )}
                  <span className="font-medium text-sm">{mainGroup.title}</span>
                </button>
                {expandedGroups.includes(mainGroup.title) && (
                  <div className="pl-4 space-y-1">
                    {mainGroup.subgroups.map((subgroup) => (
                      <button
                        key={`nav-subgroup-${mainGroup.title}-${subgroup.title}`}
                        onClick={() =>
                          scrollToSection(mainGroup.title, subgroup.title)
                        }
                        className={`w-full text-left text-xs py-1 px-2 rounded hover:bg-accent flex items-center space-x-1 ${
                          selectedGroup === mainGroup.title &&
                          selectedSubgroup === subgroup.title
                            ? "bg-accent"
                            : ""
                        }`}
                      >
                        <ChevronRight className="h-3 w-3 flex-shrink-0" />
                        <span>{subgroup.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
