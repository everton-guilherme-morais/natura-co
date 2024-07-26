import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import { ProductProvider } from "@/context/ProductContext";
import { Toaster } from "@/components/ui/toaster";
import { getAllProducts } from '@/api/product/route';
import { Product } from '@/types/product';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Natura",
  description: "Criado por Everton Guilherme",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products: Product[] = await getAllProducts();
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ProductProvider initialProducts={products}>
            <Header />
            {children}
            <Toaster />
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
