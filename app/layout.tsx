import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "LUMIÈRE | Beauty Salon",
  description:
    "アクセスした瞬間に心を掴む高品質なヒーローイメージでブランドの世界観を伝えつつ、一言で「なぜここに行くべきか」というコンセプトを明確に示しているのが特徴です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className="font-sans text-stone-800 bg-stone-50 antialiased selection:bg-stone-200"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
