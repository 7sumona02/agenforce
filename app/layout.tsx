import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar'

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Agenforce Marketing Template",
  description: "Agenforce is a multipurpose marketing template built with Nextjs, Javascript, Tailwind CSS and Motion for react.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
          <main className="bg-background text-foreground">{children}</main>
      </body>
    </html>
  );
}
