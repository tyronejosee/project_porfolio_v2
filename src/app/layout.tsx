import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers";
import { BackToTop, Footer, NavbarMenu } from "@/components/ui";

import "../styles/globals.css";
import owner from "@/data/owner.json";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${owner.full_name} | Portfolio`,
  description: `${owner.description}`,
  keywords: [
    "portfolio",
    "backend",
    "python",
    "django",
    "fastapi",
    "databases",
    "developer",
  ],
  openGraph: {
    title: `${owner.full_name} - Portfolio`,
    description: `${owner.description}`,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: `${owner.full_name} - ${owner.specialty}`,
    images: [
      {
        url: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1726444056/ubt1lho0b0td6ojoukol.webp",
        width: 800,
        height: 450,
        alt: "Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <NavbarMenu />
          <main className="max-w-screen-md mx-auto space-y-16 flex flex-col min-h-[650px] p-4">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
