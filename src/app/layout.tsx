import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderLayout from "@/layouts/Header/app.header";
import FooterLayout from "@/layouts/Footer/app.footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <HeaderLayout />
          {children}
          <FooterLayout />
        </AntdRegistry>
      </body>
    </html>
  );
}
