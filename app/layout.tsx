import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HamroSathi - Verified Professionals for every task",
  description: "Find trusted local experts for cleaning, repairs, moving, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background antialiased font-body-md">
        {children}
      </body>
    </html>
  );
}