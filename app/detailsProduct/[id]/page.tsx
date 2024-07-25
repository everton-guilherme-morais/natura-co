"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import StarRating from '@/components/StarsRating';

export default function DetailsProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Essencial Masculino',
      imageCover: '/images/perfume-essencial-1.jpg',
      images: [
        {
          id: 1,
          image: '/images/perfume-essencial-1.jpg',
        },
        {
          id: 2,
          image: '/images/perfume-essencial-2.jpg',
        },
        {
          id: 3,
          image: '/images/perfume-essencial-3.jpg',
        },
        
      ],
      stars: 1,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'Perfume',
      for: 'M',
      description: 'Natura Homem Emocione é uma fragrância inspirada na força das emoções masculinas por meio do contraste de amadeirado do sândalo com a inesperada flor de cactus e pataqueira, óleo da biodiversidade brasileira.',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Doce'
        },
        {
          id: 3,
          description: 'Legal'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    }
  ]

  // useEffect(() => {
  //   const productId = parseInt(params.id, 10);
  //   const foundProduct = products.find((product) => product.id === productId);
  //   setProduct(foundProduct);
  // }, [params.id]);

  // if (!product) {
  //   return <div>Produto não encontrado</div>;
  // }

  return (
    <div className='py-8 xl:py-9 container mx-auto '>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <Image src={products[0].imageCover} alt='product' width={500} height={500} className='rounded-xl object-cover w-[400] h-[400] '/>
        <div className='flex flex-1 flex-col gap-4 items-start'>
          <h2 className='font-bold text-4xl'>{products[0].name}</h2>
          <p className='text-lg font-semibold'>R$ {products[0].valueOfficial}</p>
          <StarRating stars={products[0].stars} />
          <p className='text-base text-gray-700'>{products[0].description}</p>

          <Button size="lg" className='w-60 mt-5'>
            <ShoppingBag className='mr-4 h-5 w-5' /> Adicionar à sacola
          </Button>
        </div>
      </div>
      {/* <div className='absolute inset-0 flex items-center justify-between px-8'>
        <Button variant="ghost" size="icon">
          <ChevronLeft className='w-6 h-6' />
        </Button>
        <Button variant="ghost" size="icon" >
          <ChevronRight className='w-6 h-6' />
        </Button>
      </div> */}
    </div>
  )
}