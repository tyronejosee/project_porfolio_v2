"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: "dark",
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
