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


export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`http://localhost:3001/products`, {
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