"use client"

import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StarRating from "../StarsRating";

import Link from "next/link";

export default function ListProducts(){
  const products = [
    {
      id: 1,
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
      name: 'Essencial Masculino 100ml',
      stars: 1,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
    {
      id: 2,
      imageCover: '/images/essencial-feminino-1.jpg',
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
      name: 'Essencial Masculino 100ml',
      stars: 4,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
    {
      id: 3,
      imageCover: '/images/natura-essence-homen.jpg',
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
      name: 'Essencial Masculino 100ml',
      stars: 4,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
    {
      id: 4,
      imageCover: '/images/natura-homen.jpg',
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
      name: 'Essencial Masculino 100ml',
      stars: 4,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
    {
      id: 5,
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
      name: 'Essencial Masculino 100ml',
      stars: 4,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
    {
      id: 6,
      imageCover: '/images/perfume-essencial-3.jpg',
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
      name: 'Essencial Masculino 100ml',
      stars: 4,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
    {
      id: 7,
      imageCover: '/images/perfume-essencial-3.jpg',
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
      name: 'Essencial Masculino 100ml',
      stars: 4,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
    {
      id: 8,
      imageCover: '/images/perfume-essencial-3.jpg',
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
      name: 'Essencial Masculino 100ml',
      stars: 4,
      valueOfficial: '210,00',
      valueInitial: '310,00',
      discount: 20,
      category: 'perfume',
      for: 'M',
      body: true,
      description: 'khjgfcskdjhgcfzjshdgvfjihkszdgcvzkjyshgdcvjkhz',
      size: null,
      comments: 130,
      goodToKnow: [
        {
          id: 1,
          description: 'Amadeirado'
        },
        {
          id: 2,
          description: 'Amadeirado'
        },
        {
          id: 3,
          description: 'Amadeirado'
        },
        {
          id: 4,
          description: 'Amadeirado'
        },
      ]
    },
  ]


  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center mb-24">
        <h3 className="font-bold text-2xl pb-10">Descubra as fragrâncias que combinam com você</h3>
        {/* Lista de produtos */}
        <div className="w-full xl:w-[100%]">
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={60}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="h-96 w-full rounded-lg"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/detailsProduct/${item.id}`}>
                  <div className="flex flex-col h-full items-center justify-center gap-5">
                    <Image
                      src={item.imageCover}
                      alt={item.name}
                      className="block h-full w-full object-cover rounded-xl"
                      width={300}
                      height={300}
                    />
                    <div className="flex flex-col w-full">
                      <h1 className="flex font-bold">{item.name}</h1>
                      <div className="flex flex-row gap-2">
                        <StarRating stars={item.stars} />
                        {item.stars} de 5
                      </div>
                      <div className="flex flex-row justify-between gap-3">
                        <span className="font-extrabold text-xl"> R$ <b>{item.valueOfficial}</b></span>
                        <s>R$ {item.valueInitial}</s>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>          
        </div>
      </div>
    </section>
  )
}