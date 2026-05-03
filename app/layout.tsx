import { Lora, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const fontHeading = Lora({ subsets: ['latin'], variable: '--font-heading' })
const fontSans = Manrope({ subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontHeading.variable, "font-sans")}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col pt-[88px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
