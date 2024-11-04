import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConfigureStore from "@/app/ConfigureStore";

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

export const metadata: Metadata = {
  title: "Redux ToolKit TODO",
  description: "TODO App using Redux-ToolKit as well as React-Redux",
  icons: ["/redux.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}>
        <ConfigureStore>
          {children}
        </ConfigureStore>
      </body>
    </html>
  );
}
