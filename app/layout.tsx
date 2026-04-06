import type { Metadata } from "next";
import { Inter, Playfair_Display, Phudu, Love_Ya_Like_A_Sister } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const phudu = Phudu({ subsets: ["latin"], variable: '--font-phudu' });
const loveYa = Love_Ya_Like_A_Sister({ weight: '400', subsets: ["latin"], variable: '--font-love-ya' });

export const metadata: Metadata = {
    title: "Rouble Tuli | Wonders of Academy",
    description: "Dr. Rouble Tuli - Education Activist. Discover the Wonders of Academy and other possibilities.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} ${phudu.variable} ${loveYa.variable} font-sans`}>
                {children}
                <GoogleAnalytics />
            </body>
        </html>
    );
}
