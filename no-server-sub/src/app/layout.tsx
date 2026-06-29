import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Server | Simple Deployment Pricing",
  description: "Deploy production applications without managing servers. Simple annual plans for developers and teams.",
  icons: {
    icon: "/favicon.ico",
  },
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
