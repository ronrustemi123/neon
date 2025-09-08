import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import {ThemeProvider} from "@/lib/theme-provider";
import Navbar from "@/app/components/Navbar";

const satoshi = localFont({
    src: [
        {
            path: '../public/fonts/Satoshi/Satoshi-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/Satoshi/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Satoshi/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/Satoshi/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal',
        },        {
            path: '../public/fonts/Satoshi/Satoshi-Black.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-satoshi',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL("https://neon.dev"), // replace with your domain
    title: {
        default: "Neon – Bring your ideas to light",
        template: "%s | Neon",
    },
    description:
        "Neon builds high-performance websites and mobile apps with modern design, speed, and functionality—helping businesses grow in the digital era.",
    keywords: [
        "web development",
        "mobile apps",
        "performance",
        "digital agency",
        "North Macedonia",
    ],
    openGraph: {
        title: "Neon – Bring your ideas to light",
        description:
            "We craft cutting-edge web and mobile solutions that drive business growth.",
        url: "https://neon.dev", // replace with domain
        siteName: "Neon",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/web-app-manifest-512x512.png", // put in /public
                width: 512,
                height: 512,
                alt: "Neon Agency preview",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/icon0.svg",
        apple: "/apple-icon.png",
    }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
          className={`${satoshi.variable} font-satoshi antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
          <Navbar />
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
