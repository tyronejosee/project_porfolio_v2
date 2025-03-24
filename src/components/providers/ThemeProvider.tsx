"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        // value={{
        //   light: "light",
        //   dark: "dark",
        // }}
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
