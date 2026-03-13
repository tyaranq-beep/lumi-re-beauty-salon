import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUMIÈRE | 〇〇のプライベート美容室',
  description: '洗練された技術で、新しい自分に出会う。一人のスタイリストが最後まで担当する、完全予約制のプライベートサロン。',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300;1,400;1,600&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-stone-200">
        {children}
      </body>
    </html>
  );
}
