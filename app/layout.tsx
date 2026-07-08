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
  metadataBase: new URL("https://sameerverma-dev.vercel.app"),

  title: {
    default: "Sameer Verma | AI Engineer",
    template: "%s | Sameer Verma",
  },

  description:
    "Aspiring AI Engineer building AI-powered applications using Python, Next.js, React, FastAPI and Generative AI.",

  keywords: [
    "Sameer Verma",
    "AI Engineer",
    "Software Engineer",
    "Python",
    "Next.js",
    "React",
    "FastAPI",
    "Generative AI",
    "Portfolio",
    "Developer",
  ],

  authors: [
    {
      name: "Sameer Verma",
    },
  ],

  creator: "Sameer Verma",

  publisher: "Sameer Verma",

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#020617",

  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/icons/apple-touch-icon.png",
      },
    ],

    shortcut: "/icons/favicon.ico",
  },

  manifest: "/icons/site.webmanifest",

  openGraph: {
  title: "Sameer Verma | AI Engineer",

  description:
    "Building AI-powered applications using Python, Next.js, FastAPI and Generative AI.",

  url: "https://sameerverma-dev.vercel.app",

  siteName: "Sameer.dev",

  locale: "en_US",

  type: "website",

  images: [
    {
      url: "/og/og-image.png",
      width: 1200,
      height: 630,
      alt: "Sameer Verma Portfolio",
    },
  ],
},

  twitter: {
  card: "summary_large_image",

  title: "Sameer Verma | AI Engineer",

  description:
    "Building AI-powered applications using Python, Next.js, FastAPI and Generative AI.",

  images: ["/og/og-image.png"],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}