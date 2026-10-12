
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ecommerce/Header";
import { Footer } from "@/components/ecommerce/Footer";
import { CartProvider } from "@/context/CartContext";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argan Beauty",
  description: "Your one-stop shop for beauty products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
