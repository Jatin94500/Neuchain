import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlgorandOS Downloads",
  description: "Download center for AlgorandOS builds across desktop and mobile devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
