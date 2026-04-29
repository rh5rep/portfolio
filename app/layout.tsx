import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rami Hanna | Robotics, Software, and Controls",
  description:
    "Professional portfolio for Rami Hanna, featuring robotics software, controls, sensing, mechatronics, simulation, and hands-on engineering work.",
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
