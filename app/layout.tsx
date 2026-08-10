import { Spectral, Public_Sans, Courier_Prime } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { siteMetadata } from "@/lib/site"

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        spectral.variable,
        publicSans.variable,
        courierPrime.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-svh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
