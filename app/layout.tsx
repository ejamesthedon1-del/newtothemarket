"use client";

import "./globals.css";
import { LogoProvider } from "./context/LogoContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LogoProvider>{children}</LogoProvider>
      </body>
    </html>
  );
}
