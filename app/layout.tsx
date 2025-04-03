import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ChatProvider } from "@/app/contexts/ChatContext";
import { CoursesProvider } from "@/app/contexts/CoursesContext";
import { SchedulePriorityProvider } from "./contexts/SchedulePriorityContext";
import RightBar from "@/app/ui/components/RightBar/RightBar";
import Footer from "@/app/ui/components/Footer/Footer";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E7R69QRCN3" id="0" />
        <Script id="1"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E7R69QRCN3');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <div className="content">
            <div className="child">
              <ChatProvider>
                <CoursesProvider>
                  <SchedulePriorityProvider>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                  </SchedulePriorityProvider>
                </CoursesProvider>
              </ChatProvider>
            </div>
            <div className="right-bar">
              <RightBar />
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
