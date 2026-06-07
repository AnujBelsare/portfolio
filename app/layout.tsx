import type { Metadata } from "next";
import {
  DM_Sans,
  DM_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "300"
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anujbelsare.online"),

  title: {
    default: "Anuj Belsare | Web Developer",
    template: "%s | Anuj Belsare",
  },

  description:
    "Web Developer specializing in Next.js, React, TypeScript, Node.js, and modern web technologies. Building fast, scalable, SEO-focused web applications and digital experiences.",

  keywords: [
    "Anuj Belsare",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Portfolio",
    "JavaScript Developer",
    "Tailwind CSS",
    "SEO Optimization",
    "MERN Stack",
    "Web Applications",
  ],

  authors: [
    {
      name: "Anuj Belsare",
      url: "https://anujbelsare.online",
    },
  ],

  creator: "Anuj Belsare",
  publisher: "Anuj Belsare",

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

  alternates: {
    canonical: "https://anujbelsare.online",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anujbelsare.online",
    title: "Anuj Belsare | Web Developer",
    description:
      "Web Developer building fast, scalable, and SEO-friendly applications with Next.js, React, TypeScript, and Node.js.",
    siteName: "Anuj Belsare",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anuj Belsare Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anuj Belsare | Web Developer",
    description:
      "Web Developer specializing in Next.js, React, TypeScript, and modern web experiences.",
    images: ["/og-image.png"],
  },

  category: "technology",

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
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
      suppressHydrationWarning
      className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen">
        <main className="mx-auto max-w-lg px-2">
          {children}
        </main>
      </body>
    </html>
  );
}