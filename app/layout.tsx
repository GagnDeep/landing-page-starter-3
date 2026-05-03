import { Lora, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { cn } from "@/lib/utils";

const fontHeading = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontHeading.variable, fontSans.variable)}
    >
      <body className="flex min-h-screen flex-col font-sans selection:bg-primary/20">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
