import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ChatProvider } from "@/app/contexts/ChatContext";
import MobileWrapper from "@/app/components/MobileWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BKhrono",
  description: "BKhrono (BK + chronology) is a web application designed to automatically generate schedules for HCMUT students, simplifying their planning process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChatProvider>
          <MobileWrapper>
            {children}
          </MobileWrapper>
        </ChatProvider>
      </body>
    </html>
  );
}
