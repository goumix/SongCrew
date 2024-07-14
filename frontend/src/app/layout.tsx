import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils"
import RainbowkitAndWagmiProvider from "./RainbowKitAndWagmiProvider";
import Layout from "@/components/shared/Layout";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "SongCrew",
  description: "A crowdfunding dApp that allows artists to finance their projects",
  openGraph:{
    type: "website",
    locale: "fr_FR",
    url: "https://songcrew.app",
    siteName: "SongCrew",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased bg-slate-950 text-white",
          fontSans.className
        )}
      >
        <RainbowkitAndWagmiProvider>
          <Layout>
            {children}
          </Layout>
        </RainbowkitAndWagmiProvider>
        <Toaster />
      </body>
    </html>
  )
}
