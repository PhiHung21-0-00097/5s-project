import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Otis Luxury | [Otis Luxury]",
    description: "otis nguyễn",
    keywords: "otis,nguyễn, otisnguyen, otis nguyễn,luxury,otisluxury,",
    authors: [
        { name: "Otis Nguyễn", url: "https://www.nguyenhoangphihung.id.vn/" },
    ],
    robots: "index, follow",
    openGraph: {
        title: "Otis Luxury | [Otis Luxury]",
        description: "otis nguyễn",
        url: "https://www.nguyenhoangphihung.id.vn/",
        siteName: "Otis Luxury",
        images: [
            {
                url: "https://www.yoursite.com/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Preview image of your website",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@YourTwitterHandle",
        title: "Otis Luxury | [Otis Luxury]",
        description: "otis nguyễn",
        // image: "https://www.yoursite.com/twitter-image.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable || ""} ${
                    geistMono.variable || ""
                } antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
