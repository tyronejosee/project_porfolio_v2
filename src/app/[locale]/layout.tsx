import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../../styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Footer, NavbarMenu } from "@/components";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tyrone José | Portfolio",
  description: "Backend developer specializing in Python. Creating efficient and secure applications using frameworks like Django, Flask, and FastAPI. In this portfolio, you will find some of my projects and examples of my work with APIs and databases.",
  keywords: ["portfolio", "backend", "python", "django", "fastapi", "databases", "developer"],
  openGraph: {
    title: "Tyrone José - Portfolio",
    description: "Backend developer specializing in Python. Creating efficient and secure applications using frameworks like Django, Flask, and FastAPI. In this portfolio, you will find some of my projects and examples of my work with APIs and databases.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Tyrone José - Backend Developer",
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
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <NavbarMenu />
            <main className="max-w-screen-lg mx-auto space-y-16 flex flex-col min-h-[650px] p-4">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
