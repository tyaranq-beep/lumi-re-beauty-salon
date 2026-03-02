import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DemoBanner from '@/components/ui/DemoBanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'YWP Beauty | 心地よい空間で叶える、理想のヘアスタイル',
  description: '熟練のスタイリストが一人ひとりに寄り添い、魅力を最大限に引き出します。地域に愛される、くつろぎのプライベートサロン。',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* 
        Note: React 19 / Next 15 with Tailwind 4.
        Add font links here or in CSS.
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300;1,400;1,600&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-stone-900 bg-stone-100 antialiased pt-[76px] lg:pt-[84px] min-h-screen flex flex-col">
        <ScrollReveal />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <DemoBanner industry="美容室・サロン" />
        <Footer />
      </body>
    </html>
  );
}
