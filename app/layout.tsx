import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rami Hanna | Robotics, Software, and Data Systems",
  description:
    "Professional portfolio for Rami Hanna, featuring robotics software, sensing, data quality, simulation, and product-minded systems work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
