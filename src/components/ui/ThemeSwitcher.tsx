"use client";

import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@/components/icons";


export default function ThemeSwitcher() {
  const { theme, setTheme } = useNextTheme();

  return (
    <Switch
      checked={theme === "dark"}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
    />
  );
};
