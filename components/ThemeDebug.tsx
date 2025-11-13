"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDebug() {
  const { theme } = useTheme();
  const [htmlClasses, setHtmlClasses] = useState("");
  useEffect(() => {
    setHtmlClasses(document.documentElement.className);
  });
  return (
    <div className="fixed bottom-2 right-2 px-2 py-1 text-xs rounded bg-black/60 text-white">
      theme: {theme} | html: {htmlClasses}
    </div>
  );
}
