import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Marcellus } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  style: "normal",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellus.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
