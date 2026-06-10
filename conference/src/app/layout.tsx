import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DNA Management | Corporate Training & Development",
  description: "DNA Management delivers corporate training and development programs that help organizations build stronger leaders, improve communication, and create high-performing teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-white text-black`}>{children}</body>
    </html>
  );
}
