import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rami Hanna | Robotics Systems Engineer",
  description:
    "Rami Hanna is a robotics engineer working across sensing, controls, simulation, and physical systems that benefit people and the real world.",
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
