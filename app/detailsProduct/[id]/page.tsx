"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import StarRating from '@/components/StarsRating';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";
import { getProduct } from '@/api/product/route';
import NotFound from '@/app/not-found';

export default function DetailsProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const { addToCart, cart } = useCart();
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await getProduct(params.id);
        
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Failed to fetch product', error);
        toast({
          description: "Não foi possível carregar o produto",
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id, toast]);

  useEffect(() => {
    if (product) {
      setIsInCart(cart.some(cartItem => cartItem.id === product.id));
    }
  }, [cart, product]);

  if (loading) {
    return (
      <div className='w-full h-full flex flex-1 items-center justify-center p-10 container mx-auto'>
        <Image src='/images/natura-logo-vector.png' alt='product' width={400} height={100} className='rounded-xl object-cover' />
        <p className='font-semibold'>Aguarde um momento</p>
      </div>
    )
  }

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      setLoading(true);
      const productToAdd = { ...product, quantity: 1 };
      await addToCart(productToAdd);

      toast({
        description: (
          <div className="flex items-center space-x-2">
            <Image alt="" className="h-10" src="/images/image-natura.png" width={50} height={50}/>
            <span className="font-bold">Item adicionado ao carrinho</span>
          </div>
        ),
      });
      setIsInCart(true);
    } catch {
      toast({
        variant: "destructive",
        description: "Ocorreu um erro ao adicionar o item ao carrinho",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='py-8 xl:py-9 container mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-0'>
        <div className='mx-auto xl:w-[600px] flex flex-1 items-center justify-center'>
          <Image src={product.imageCover} alt='product' width={400} height={100} className='rounded-xl object-cover' />
        </div>
        <div className='flex flex-1 flex-col gap-4 items-start'>
          <h2 className='font-bold text-4xl'>{product.name}</h2>
          <p className='text-xs'>{product.brand}</p>
          <div className='rounded-3xl text-[10px] bg-[#194B73] text-white font-bold px-2 py-1'>{product.stateProduct}</div>
          <p className='text-lg font-semibold'>R$ {product.priceWithDiscount}</p>
          <StarRating stars={product.stars} />
          <p className='text-base text-gray-700'>{product.description}</p>

          <Button 
            size="lg" 
            className='w-60 mt-5' 
            disabled={loading || isInCart} 
            onClick={handleAddToCart}
          >
            <ShoppingBag className='mr-4 h-5 w-5' /> 
            {loading ? 'Adicionando...' : isInCart ? 'No carrinho' : 'Adicionar à sacola'}
          </Button>
        </div>
      </div>
    </div>
  );
}
