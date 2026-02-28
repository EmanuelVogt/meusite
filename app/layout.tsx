import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import { ThemeProvider, ThemeToggle, LocaleProvider, LocaleToggle } from "@/src/shared/ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emanuel | Senior Full Stack Developer",
  description:
    "Portfolio of a Senior Full Stack Developer specializing in React, Node.js, and TypeScript. Building high-performance web applications with clean architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')return;document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <LocaleToggle />
            <ThemeToggle />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
