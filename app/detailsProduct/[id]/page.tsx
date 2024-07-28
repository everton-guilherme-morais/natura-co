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
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns'

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

  const getStateProductBgColor = (stateProduct?: string) => {
    switch (stateProduct) {
      case 'Lançamento':
        return 'bg-orange-500';
      case 'Progressivo':
        return 'bg-[#194B73]';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className='py-8 xl:py-9 container mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2'>
        <div className='flex flex-1 lg:ml-10'>
          <Image src={product.imageCover} alt='product' width={500} height={100} className='rounded-xl object-cover' />
        </div>
        <div className='flex flex-1 flex-col gap-4 items-start'>
          <h2 className='font-bold text-4xl'>{product.name}</h2>
          <p className='text-xs'>{product.brand}</p>
          {product.stateProduct === '' ? null : 
            <div className={`rounded-3xl text-[10px] text-white font-bold px-2 py-1 ${getStateProductBgColor(product.stateProduct)}`}>
              {product.stateProduct}
            </div>
          }
          <p className='text-lg font-semibold'>R$ {product.priceWithDiscount}</p>
          <StarRating stars={product.stars} />

          <Button 
            size="lg" 
            className='w-60' 
            disabled={loading || isInCart} 
            onClick={handleAddToCart}
          >
            <ShoppingBag className='mr-4 h-5 w-5' /> 
            {loading ? 'Adicionando...' : isInCart ? 'No carrinho' : 'Adicionar à sacola'}
          </Button>
            {product.goodToKnow?.length !== undefined  && (
              <div className='flex flex-1 flex-col items-start'>
                <h2 className='font-semibold text-lg py-2'>É bom vc saber:</h2>
                <div className='grid w-[600px] grid-cols-2 gap-4'>
                  {product.goodToKnow?.map((item, index) => (
                    <div className='font-normal flex flex-1 items-center justify-start' key={index}>
                      <Image src={'/images/image-natura.png'} alt='' width={40} height={40} />
                      <span className='ml-2'>{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
      <div className='container mx-auto lg:p-10 p-0 py-5 flex flex-1 flex-col gap-3'>
        <h2 className='font-semibold text-3xl'>Descrição:</h2>
        <p className='text-base text-gray-700'>{product.description}</p>
      </div>
      <div className='container mx-auto lg:p-10 p-0 flex flex-1 flex-col gap-3'>
        <h2 className='font-semibold text-3xl'>Comentários:</h2>
        {product.assessments?.map((item, index) => (
          <div key={index} className='flex flex-1 flex-col gap-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-20 font-semibold'>
                <p>{item.name}</p>
                <StarRating stars={item.stars} />
              </div>
              <span className=''>{format(new Date(item.dateCommment), 'd/MM/yyyy')}</span>
            </div>
            <div className='font-normal'>
              {item.comment}
            </div>
            <Separator className=" bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
