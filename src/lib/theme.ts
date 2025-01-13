"use client";

export function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark");

  if (isDark) {
    root.classList.remove("dark");
    root.classList.add("light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
  }
}
