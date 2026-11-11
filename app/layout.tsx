import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Daniel — Creator for ambitious tech brands",
  description:
    "Short-form content for apps, SaaS, AI tools, and digital brands. Strategy-minded creator, measurable results.",
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
