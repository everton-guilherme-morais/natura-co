'use client'

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getAllProducts } from '@/api/product/route';
import { Product } from '@/types/product';

interface ProductContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
  fetchProducts: () => void;
}

interface ProductProviderProps {
  children: ReactNode;
  initialProducts?: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children, initialProducts = [] }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    if (initialProducts.length === 0) {
      fetchProducts();
    }
  }, [initialProducts]);

  return (
    <ProductContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
