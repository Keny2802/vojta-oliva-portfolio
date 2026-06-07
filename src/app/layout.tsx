import type {
  Metadata
} from "next";
import {
  Baloo_2,
  Inter,
  Kanit,
  Playfair_Display,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900", ],
});

const fontPlayFairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700", "800", "900", ],
})

const fontKanit = Kanit({
  variable: "--font-kanit",
  subsets: [
    "latin"
  ],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ]
});

const fontBaloo = Baloo_2({
  variable: "--font-baloo",
  subsets: [
    "latin"
  ],
  weight: [ "400", "500", "600", "700", "800", ],
});

const fontGreatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: [
    "latin"
  ],
  weight: [ "400"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.vojtaoliva.cz"),
    title: "Vojta Oliva | Webový vývojář z Prahy",
    description:
        "Jsem Vojta Oliva, webový vývojář z Prahy. Vytvářím moderní webové stránky, firemní prezentace, e-shopy a webové aplikace s důrazem na rychlost, SEO a kvalitní uživatelský zážitek.",

    icons: [
      {
        url: "/assets/logo/logo.avif",
        type: "image/avif"
      }
    ],

    keywords: [
        "Vojta Oliva",
        "webový vývojář Praha",
        "web developer Praha",
        "tvorba webových stránek Praha",
        "vývoj webových aplikací",
        "Next.js developer",
        "React developer",
        "frontend developer Praha",
        "SEO weby",
        "e-shop na míru",
        "firemní weby",
        "webdesign Praha",
    ],

    authors: [
        {
            name: "Vojta Oliva",
        },
    ],

    creator: "Vojta Oliva",
    publisher: "Vojta Oliva",

    openGraph: {
        title: "Vojta Oliva | Webový vývojář z Prahy",
        description:
            "Tvorba moderních webových stránek, e-shopů a webových aplikací. Webový vývojář z Prahy se zaměřením na React, Next.js a SEO.",
        url: "https://www.vojtaoliva.cz",
        siteName: "Vojta Oliva",
        locale: "cs_CZ",
        type: "website",
        images: [
            {
                url: "/assets/me-1.avif",
                width: 1200,
                height: 630,
                alt: "Vojta Oliva - Webový vývojář z Prahy",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Vojta Oliva | Webový vývojář z Prahy",
        description:
            "Tvorba webových stránek, e-shopů a webových aplikací na míru.",
        images: ["/assets/me-1.avif"],
    },

    alternates: {
        canonical: "https://www.vojtaoliva.cz",
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

    category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs">
      <body className={`
      ${fontInter.variable}
      ${fontKanit.variable}
      ${fontPlayFairDisplay.variable}
      ${fontBaloo.variable}
      ${fontGreatVibes.variable}
      antialiased`}>
        {children}
      </body>
    </html>
  );
}
