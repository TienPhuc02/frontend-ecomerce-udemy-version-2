import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeRegistry from "@/theme-registry/theme.registry";
import HeaderLayout from "@/layouts/Header/layout.header";
import FooterLayout from "@/layouts/Footer/layout.footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ThemeRegistry>
            <HeaderLayout />
            {children}
            <FooterLayout />
          </ThemeRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
