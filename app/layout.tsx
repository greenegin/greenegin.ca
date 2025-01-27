import type { Metadata } from "next";
import { Zen_Antique_Soft } from 'next/font/google';
import "./globals.css";

const zenAntique = Zen_Antique_Soft({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Discover the Arts of Japan",
  description: "Karate Academy and Kokedamas Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zenAntique.className} text-[#FFF3C7] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
