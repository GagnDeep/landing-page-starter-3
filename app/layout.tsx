import type { Metadata } from 'next';
import { Instrument_Serif, Public_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../lib/site';

const fontHeading = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
});

const fontSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontSans.variable} ${fontMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteConfig.name,
              url: siteConfig.url,
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
