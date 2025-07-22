import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "APV Calculator - Alcohol By Volume",

  description:
    "Calculate Alcohol By Volume (ABV) for brewing with precision. Simple, accurate gravity-based calculations with AI-powered name generation for your craft beverages.",
  keywords:
    "ABV calculator, alcohol by volume, brewing calculator, gravity calculator, beer brewing, homebrew, craft beer, wine making, mead, cider",
  authors: [{ name: "APV Brewing" }],
  creator: "APV Brewing",
  publisher: "APV Brewing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://apv-calculator.vercel.app"),
  openGraph: {
    title: "APV Calculator - Alcohol By Volume",
    description:
      "Calculate ABV for your homebrew with precision. Features AI-powered name generation for craft beverages.",
    url: "https://apv-calculator.vercel.app",
    siteName: "APV Calculator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "APV Calculator - Alcohol By Volume",
    description:
      "Calculate ABV for your homebrew with precision. Features AI-powered name generation for craft beverages.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
