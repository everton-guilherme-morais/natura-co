"use client"

import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/ProductContext";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StarRating from "../StarsRating";

import Link from "next/link";

export default function ListProducts(){
  const { products = [] } = useContext(ProductContext);
  const [loading, setLoading] = useState(products.length === 0);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center mb-24">
        <h3 className="font-bold text-2xl pb-10">Descubra as fragrâncias que combinam com você</h3>
        {loading && <div className="flex items-center justify-center w-full h-[150px] font-medium">Carregando seus futuros produtos</div>}
        {/* Lista de produtos */}
        <div className="w-full xl:w-[100%]">
          <Swiper
            navigation={true}
            spaceBetween={60}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              1264: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
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
                        <span className="font-extrabold text-xl"> R$ <b>{item.priceWithDiscount}</b></span>
                        <s>R$ {item.priceInitial}</s>
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