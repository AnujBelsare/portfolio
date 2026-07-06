import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const BASE_URL = "https://anujbelsare.online";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Anuj Belsare",
    template: "%s | Anuj Belsare",
  },

  description:
    "Anuj Belsare is a full stack web developer from India specialising in Next.js, React, TypeScript, and Node.js. Available for freelance projects, internships, and full-time roles.",

  keywords: [
    "Anuj Belsare",
    "Full Stack Developer",
    "Web Developer India",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Freelance Web Developer",
    "Portfolio",
    "MERN Stack",
    "Tailwind CSS",
    "Maharashtra",
    "MIT Chh. Sambhajinagar",
  ],

  authors: [{ name: "Anuj Belsare", url: BASE_URL }],
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
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "Anuj Belsare — Full Stack Web Developer",
    description:
      "Full stack developer building fast, scalable web apps with Next.js, React, TypeScript, and Node.js. Open to freelance work and full-time roles.",
    siteName: "Anuj Belsare",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anuj Belsare — Full Stack Web Developer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anuj Belsare — Full Stack Web Developer",
    description:
      "Full stack developer specialising in Next.js, React, TypeScript, and Node.js. Available for freelance and full-time.",
    images: ["/og-image.png"],
    creator: "@anujbelsare",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* Person structured data — helps Google understand who this portfolio belongs to */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anuj Belsare",
              url: BASE_URL,
              jobTitle: "Full Stack Web Developer",
              worksFor: { "@type": "Organization", name: "Freelance" },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Maharashtra Institute of Technology, Chh. Sambhajinagar",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
                "MongoDB",
                "Supabase",
              ],
              sameAs: [
                "https://github.com/AnujBelsare",
                "https://linkedin.com/in/anuj-belsare",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        <main className="mx-auto max-w-lg px-4 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
