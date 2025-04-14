"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "@/components/icons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      checked={theme === "dark"}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      size="lg"
      color="primary"
    />
  );
}
