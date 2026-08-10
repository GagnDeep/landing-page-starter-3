import type { Metadata } from "next"
import { Libre_Franklin, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig, buildMetadata } from "@/lib/site"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600"],
  display: "swap",
})

const libreFranklinHeading = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = buildMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libreFranklin.variable} ${libreFranklinHeading.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
