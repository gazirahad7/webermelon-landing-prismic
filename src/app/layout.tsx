import "./globals.css";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import CountDown from "@/components/CountDown";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />

        {children}

        <Footer />

        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=webermelon"
        ></script>
      </body>

      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
