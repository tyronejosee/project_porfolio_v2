"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Skeleton, Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "@/components/icons";

function ThemeSwitcherSkeleton() {
  return <Skeleton className="w-14 h-8 rounded-full" />;
}

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsSelected(resolvedTheme === "dark");
    }
  }, [resolvedTheme, mounted]);

  if (!mounted) return <ThemeSwitcherSkeleton />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    // setIsSelected(e.target.checked);
  };

  return (
    <Switch
      isSelected={isSelected}
      onChange={handleChange}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      size="lg"
      color="primary"
    />
  );
}
