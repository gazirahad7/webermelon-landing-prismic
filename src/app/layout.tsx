import "./globals.css";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";

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
        <footer>Footer</footer>

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
