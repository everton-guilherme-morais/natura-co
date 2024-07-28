'use client'

import { Product } from '@/types/product';
import { productListSchema, productSchema, cartSchema } from '@/types/validations/productValidation';
import axios from 'axios';

export const getSearchProducts = async (searchParams: URLSearchParams): Promise<Product[]> => {
  const query = searchParams.toString();
  try {
    const response = await axios.get<Product[]>(`http://localhost:3001/products/search?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const products = productListSchema.parse(response.data);

    return products;
  } catch (error) {
    console.error('Failed to search products', error);
    throw new Error('Failed to search products');
  }
};

export const getProduct = async (id: string): Promise<Product> => {
  const idProduct = Number(id)
  try {
    const response = await axios.get<Product>(`http://localhost:3001/products/${idProduct}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const product = productSchema.parse(response.data);

    return product;
  } catch (error) {
    console.error('Failed to fetch product', error);
    throw new Error('Failed to fetch product');
  }
}

export const postProductInCar = async (sessionId: string, products: Product[]) => {
  const payload = { sessionId, products };
  try {
    cartSchema.parse(payload);

    console.log(payload, 'payload')

    const response = await axios.post('http://localhost:3001/products/cart', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to add product to cart', error);
    throw new Error('Failed to add product to cart');
  }
}