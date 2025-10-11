import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import 'material-symbols/outlined.css';
import NavBar from "../components/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Malia Wakesho-Ajwang",
  description: "Portfolio website of Malia Wakesho-Ajwang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <div className="flex h-screen">
          <NavBar />
          <div className="flex-1 p-8 overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
