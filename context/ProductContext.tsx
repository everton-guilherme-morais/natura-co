'use client'

import React, { createContext, useState, useEffect, useMemo, ReactNode } from 'react';
import axios from 'axios';
import { Product } from '@/types/product';

interface ProductContextType {
  products: Product[];
}

export const ProductContext = createContext<ProductContextType>({ products: [] });

interface ProductProviderProps {
  children: ReactNode; // Defina o tipo de children
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://web-production-b544b.up.railway.app/products');
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
