import type {
  Metadata
} from "next";
import {
  Kanit
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Jsem webový vývojář zaměřený na řemeslníky a menší firmy - Vojtěch Oliva | vojtaoliva.cz",
  description: "Specializuji se na tvorbu webových stránek pro živnostníky a menší firmy pro jejich lepší prezentaci na internetu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs">
      <body className={`${fontKanit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
