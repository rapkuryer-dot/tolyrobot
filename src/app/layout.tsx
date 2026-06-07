import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TOLYROBOT — Fan project for Toli Yakovchuk',
  description:
    'TOLYROBOT — a fan page for influencer Toli Yakovchuk. Interactive 3D robot, community, and project docs.',
  keywords: ['TOLYROBOT', 'Toli Yakovchuk', 'fan project', '3D robot', 'Spline'],
  openGraph: {
    title: 'TOLYROBOT',
    description: 'A fan-built 3D tribute to Toli Yakovchuk',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
