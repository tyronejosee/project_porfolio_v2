import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
