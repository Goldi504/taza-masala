import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAZA Masala | Hamesha Taza",
  description:
    "Premium Indian spices with authentic flavour, freshness and trust.",
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