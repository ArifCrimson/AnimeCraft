import type { Metadata } from "next";
import { Geist, Geist_Mono, Krona_One } from "next/font/google";
// import localFont from 'next/font/local';
import "./globals.css";
import '@/app/ui/global.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const krona = Krona_One({
  subsets: ['latin'],
  weight: '400',
})


export const metadata: Metadata = {
  title: "AnimeCraft",
  description: "Anime-themed shirt and accessories landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
