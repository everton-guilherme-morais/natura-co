'use client'

import { Product } from '@/types/product';
import axios from 'axios';

export const getSearchProducts = async (searchParams: URLSearchParams): Promise<Product[]> => {
  const query = searchParams.toString();
  try {
    const response = await axios.get<Product[]>(`http://localhost:3001/products/search?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to search products', error);
    throw new Error('Failed to search products');
  }
};

export const getProduct = async (id: string) => {
  const idProduct = Number(id)
  try {
    const response = await axios.get<Product>(`http://localhost:3001/products/${idProduct}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch product', error);
    throw new Error('Failed to fetch product');
  }
}