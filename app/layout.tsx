import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/layout/index"
export const metadata: Metadata = {
  title: "Eccommerce",
  description: "Best Eccommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
