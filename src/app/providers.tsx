"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <HeroUIProvider>
      <ToastProvider
        placement="bottom-center"
        maxVisibleToasts={1}
        toastProps={{
          size: "lg",
          radius: "lg",
          variant: "solid",
          color: "primary",
          timeout: 5000,
        }}
      />
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
