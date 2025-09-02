import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';


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
  title: "Neon",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${satoshi.variable} font-satoshi antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
