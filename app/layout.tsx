import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamla Oil Industries | Clean Energy For India",
  description:
    "Biomass oil refinery at F-584, UPSIDC Industrial Area, Hapur. Clean energy for India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-green-50 antialiased">
      <body className="flex min-h-full flex-col bg-green-50 font-body text-green-900">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
