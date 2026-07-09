import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";

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

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sameer Verma",
  url: "https://sameerverma-dev.vercel.app",
  image: "https://sameerverma-dev.vercel.app/og/og-image.png",
  jobTitle: "Aspiring AI Engineer",
  description:
    "Aspiring AI Engineer building AI-powered applications using Python, Next.js, FastAPI and Generative AI.",
  sameAs: [
    "https://github.com/sameer-verma-07",
    "https://www.linkedin.com/in/sameer-verma-819398399/",
  ],
};

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-slate-950 text-white antialiased">
       
       <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(personJsonLd),
  }}
/>

        {children}
      </body>
    </html>
  );
}