"use client"

import React, { useState, useEffect } from 'react';
import StarRating from "@/components/StarsRating";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function SearchProducts() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const { addToCart, cart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      setLoading(true);
      const productToAdd = { ...product, quantity: 1 };
      await addToCart(productToAdd);

      toast({
        description: (
          <div className="flex items-center space-x-2">
            <Image alt="Canguru" className="h-10" src="/images/image-natura.png" width={50} height={50}/>
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
    <section className="container mx-auto mb-20">
      <div className="flex flex-1 flex-col gap-10">
        <div className="flex flex-row items-center gap-3">
          <h2 className="font-semibold text-xl">{`Voce buscou por "${'kaiak'}"`}</h2>
          <span className="text-opacity-50 text-gray-600">(4 resultados encontrados)</span>
        </div>
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div className="flex flex-col h-full w-auto items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-auto">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className='relative'>
              <Image
                src={'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public'}
                alt={''}
                className="block h-full w-full object-cover rounded-xl"
                width={150}
                height={300}
              />
              <Link href={`/detailsProduct/${20}`}  className='absolute top-[90%] left-[80%] bg-[#f48646] rounded-full p-3 cursor-pointer'>
                <ShoppingBag className='text-[]'/>
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex font-bold">{'KAIAK'}</h1>
              <div className="flex flex-row gap-2">
                <StarRating stars={4} />
                {4} de 5
              </div>
              <div className="flex flex-row justify-between gap-3">
                <span className="font-extrabold text-xl"> R$ <b>{'290,00'}</b></span>
                <s>R$ {'290,00'}</s>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}