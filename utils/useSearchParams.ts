import { useState } from 'react';
import { searchProducts } from '../api/getSearchProducts';

export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState<URLSearchParams>(new URLSearchParams());

  const search = async () => {
    try {
      const products = await searchProducts(searchParams);
      return products;
    } catch (error) {
      console.error('Failed to search products', error);
      return [];
    }
  };

  return {
    searchParams,
    setSearchParams,
    search,
  };
};
