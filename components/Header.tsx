'use client'

import Image from "next/image";
import Link from "next/link";
import { useCart } from '@/context/CartContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback, useEffect } from "react";
import { getSearchProducts } from '@/api/product/route';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { ShoppingCart, CircleUser, Search } from 'lucide-react';
import { Separator } from "./ui/separator";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('name') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const { cart } = useCart();

  function handleSearchName() {
    const name = new URLSearchParams(searchParams);
    if (searchTerm === '') {
      name.delete('name');
    } else {
      name.set('name', searchTerm);
    }

    router.push(`/searchProducts?${name.toString()}`);
  }

  function handleCategory(value: string) {
    const category = new URLSearchParams(searchParams)

    if(value === '') {
      category.delete('category')
    } else {
      category.set('category', value)
    }

    router.push(`/searchProducts?${category.toString()}`)
  }

  return (
    <>
      <header className="py-8 xl:py-9 text-white container mx-auto">
        <div className="container mx-auto flex flex-row items-center">
          {/* Logo e Select */}
          <div className="flex flex-1 flex-row gap-2 xl:gap-10 items-center">
            <Link href="/">
              <Image
                src="/images/logo-natura.png"
                alt="logo"
                width={300}
                height={300}
                style={{ borderRadius: '10px' }}
              />
            </Link>
            <Select onValueChange={handleCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Masculino">Produtos masculinos</SelectItem>
                  <SelectItem value="Feminino">Produtos femininos</SelectItem>
                  <SelectItem value="Infantil">Infantil</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-1 items-center gap-5">
            <div className="flex flex-row items-center gap-2">
              <Input
                type="text"
                placeholder="O que está buscando hoje ?"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="text-black"
              />
              <Search 
                onClick={handleSearchName}
                className="text-black cursor-pointer"
              />
            </div>
            <Link href="/shoppingCart" className="flex items-center justify-between">
              <ShoppingCart className="text-black" cursor={"pointer"} />
              <p className="text-base pb-5 text-black font-bold">{cart.length}</p>
            </Link>
            <Link href="/">
              <CircleUser className="text-black" cursor={"pointer"} />
            </Link>
          </div>
        </div>
        <Separator className="my-4 bg-gray-300" />
      </header>
    </>
  );
}
