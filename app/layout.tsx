import type { Metadata } from "next";
import {
    Cormorant_Garamond,
    Cinzel_Decorative,
    IM_Fell_English_SC,
    Bilbo_Swash_Caps,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const cinzelDeco = Cinzel_Decorative({
    subsets: ["latin"],
    variable: "--font-cinzel-deco",
    weight: ["400", "700", "900"],
});

const imFell = IM_Fell_English_SC({
    subsets: ["latin"],
    variable: "--font-imfell",
    weight: ["400"],
});

const bilbo = Bilbo_Swash_Caps({
    subsets: ["latin"],
    variable: "--font-bilbo",
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "CELESTIK — Not magic. Just stardust and algorithms.",
    description:
        "Unlock the secrets of your palm through AI-powered palmistry. Dark cosmic personality insights and stardust reports.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${cormorant.variable} ${cinzelDeco.variable} ${imFell.variable} ${bilbo.variable}`}
        >
            <body className="font-body antialiased">{children}</body>
        </html>
    );
}
