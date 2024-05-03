import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from '@/app/components/navbar';
import Footer from '@/app/components/footer';

import { baseUrl } from './sitemap'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Christian Kencana Portfolio',
    template: '%s | Christian Kencana Portfolio',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
