import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Manrope } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Елизавета Кушниренко — юрист для бизнеса, онлайн-школ и торгов",
  description:
    "Юридическое сопровождение предпринимателей, экспертов, онлайн-школ и компаний. Консультации, договоры, персональные данные, лицензирование, торги и сопровождение бизнеса.",
  keywords: [
    "Елизавета Кушниренко",
    "юрист для бизнеса",
    "юридическое сопровождение бизнеса",
    "юрист онлайн школы",
    "юрист по торгам",
    "юрист по тендерам",
    "персональные данные",
    "лицензирование онлайн школ",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Елизавета Кушниренко — юрист для бизнеса, онлайн-школ и торгов",
    description:
      "Юридическое сопровождение предпринимателей, экспертов, онлайн-школ и компаний. Консультации, договоры, персональные данные, лицензирование, торги и сопровождение бизнеса.",
    url: siteUrl,
    siteName: "Елизавета Кушниренко",
    type: "website",
    images: [
      {
        url: "/img/fact.png",
        width: 1200,
        height: 700,
        alt: "Елизавета Кушниренко — юрист для бизнеса, онлайн-школ и торгов",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${bodoni.variable} ${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
