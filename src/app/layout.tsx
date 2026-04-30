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
  title: "Елизавета Кушниренко — юридическая упаковка бизнеса, лицензии и торги",
  description:
    "Юридическая упаковка бизнеса, лицензирование онлайн-школ, сопровождение торгов и запусков под ключ с командой KUSH.",
  keywords: [
    "юрист для бизнеса",
    "юридическая упаковка бизнеса",
    "лицензирование онлайн школ",
    "юрист по торгам",
    "KUSH упаковка бизнеса"
  ],
  openGraph: {
    title: "Елизавета Кушниренко — юридический стратег",
    description:
      "Премиальный legal boutique для бизнеса, онлайн-школ, лицензирования и торгов.",
    url: siteUrl,
    siteName: "Елизавета Кушниренко",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Елизавета Кушниренко — юридический стратег"
      }
    ]
  }
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
