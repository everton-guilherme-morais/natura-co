'use client'

import React, { createContext, useState, useEffect, useMemo, ReactNode } from 'react';
import axios from 'axios';
import { Product } from '@/types/product';

interface ProductContextType {
  products: Product[];
}

export const ProductContext = createContext<ProductContextType>({ products: [] });

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const memoizedFetchProducts = useMemo(() => fetchProducts, []);

  useEffect(() => {
    memoizedFetchProducts();
  }, [memoizedFetchProducts]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
