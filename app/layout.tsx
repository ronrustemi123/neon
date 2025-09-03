import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import {ThemeProvider} from "@/lib/theme-provider";

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
  title: "Neon – Bring your ideas to light",
  description: "Neon builds high-performance websites and mobile apps with modern design, speed, and functionality—helping businesses grow in the digital era.",
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
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
