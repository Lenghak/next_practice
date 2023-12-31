import "@/scss/globals.scss";

import { Fira_Code } from "next/font/google";

import { Providers } from "@/components/providers";

import type { Metadata } from "next";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
