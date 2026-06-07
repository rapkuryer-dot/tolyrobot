import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'TOLYROBOT — Fan project for Toli Yakovchuk',
  description:
    'TOLYROBOT — фан-страница инфлюенсера Толи Яковенко. 3D-робот, комьюнити и токен $TOLY для поддержки проекта.',
  keywords: ['TOLYROBOT', 'Toli Yakovchuk', 'Толи Яковенко', 'fan project', 'TOLY token', '3D robot'],
  openGraph: {
    title: 'TOLYROBOT',
    description: 'Фан-робот легенды — Толи Яковенко',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
