import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gatekeeper",
  description: "Dual-world entry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}
