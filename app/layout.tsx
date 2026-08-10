import { Archivo, Source_Sans_3, Azeret_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "They Are Tracking | Opt-Out Guides",
  description: "An indexed registry of data brokers and people-search sites with each opt-out procedure as it works today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(archivo.variable, sourceSans3.variable, azeretMono.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased text-base leading-[1.7]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
