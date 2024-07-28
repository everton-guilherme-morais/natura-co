"use client"

import React, { useState, useEffect, Suspense } from 'react';
import StarRating from "@/components/StarsRating";
import Image from "next/image";
import { toast, useToast } from "@/components/ui/use-toast";
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getSearchProducts } from '@/api/product/route';

export default function SearchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || '';
  const name = searchParams.get('name') || '';

  const message = category && name
    ? `Você buscou por "${category} e ${name}"`
    : category
    ? `Você buscou por "${category}"`
    : name
    ? `Você buscou por "${name}"`
    : 'Você não fez nenhuma busca';

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const searchParams = new URLSearchParams({ category, name });
        const fetchedProducts = await getSearchProducts(searchParams);
        setProducts(fetchedProducts);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Ocorreu um erro ao buscar produtos",
        });
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, [category, name]);
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="container mx-auto mb-20">
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-row items-center gap-3">
            <h2 className="font-semibold text-xl">{message}</h2>
            <span className="text-opacity-50 text-gray-600">{`${products.length} produtos encontrados`}</span>
          </div>
          {loading ? (
            <div className="flex items-center justify-center w-full h-[150px] font-medium">Carregando...</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col h-full w-full items-baseline justify-center gap-5">
                  <div className='relative'>
                    <Image
                      src={product.imageCover}
                      alt={product.name}
                      className="block h-full w-full object-cover rounded-xl"
                      width={250}
                      height={300}
                    />
                    <Link href={`/detailsProduct/${product.id}`} className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                      <ShoppingBag className='text-white' />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start w-auto">
                    <h1 className="flex font-bold">{product.name}</h1>
                    <div className="flex flex-row gap-2">
                      <StarRating stars={product.stars} />
                      {product.stars} de 5
                    </div>
                    <div className="flex flex-row justify-between gap-3">
                      <span className="font-extrabold text-xl"> R$ <b>{product.priceWithDiscount}</b></span>
                      <s>R$ {product.priceInitial}</s>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Suspense>
  )
}