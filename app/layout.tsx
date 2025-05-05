import type { Metadata } from "next";
import { Geist, Geist_Mono, Krona_One } from "next/font/google";
import "./globals.css";
import '@/app/ui/global.css';

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
