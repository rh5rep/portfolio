import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rami-hanna.com"),
  title: "Rami Hanna | Robotics Systems Engineer",
  description:
    "Rami Hanna is a robotics engineer working across sensing, controls, simulation, and physical systems that benefit people and the real world.",
  openGraph: {
    type: "website",
    siteName: "Rami Hanna",
    title: "Rami Hanna | Robotics Systems Engineer",
    description:
      "Robotics, sensing, controls, and physical systems built for the real world.",
    url: "https://www.rami-hanna.com",
  },
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
