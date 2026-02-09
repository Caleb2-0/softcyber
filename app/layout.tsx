import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './nav/page'
import Footer from './footer/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softcyber",
  description: "official site for softcyber, web developers, software developers, mobile,desktop, database development",
  openGraph:{
    title:"Softcyber",
    description:"official site for softcyber, web developers, software developers, mobile,desktop, database development",
    type:"website",
    locale:"mw",
    url:""
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-0 left-0 w-full z-50 px-5 bg-white/35 backdrop-blur-sm dark:bg-gray-800">
          <NavBar />
        </header>

        <main className="grow pt-22 px-5 min-h-screen">
          {children}
        </main>
        <footer className="px-5 mb-5"><Footer/></footer>
      </body>
    </html>
  );
}
