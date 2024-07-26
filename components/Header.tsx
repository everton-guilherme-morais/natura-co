'use client'

import Image from "next/image"
import Link from "next/link"
import { useCart } from '@/context/CartContext';
import { redirect, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback, useEffect } from "react";
import { searchProducts } from '@/actions/getSearchProducts';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import { ShoppingCart, CircleUser, Search } from 'lucide-react'
import { Separator } from "./ui/separator"

export default function Header() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('name') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const { cart } = useCart();

  const updateSearchParams = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('name', searchTerm);
    } else {
      params.delete('name');
    }
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
  }, [searchTerm, category, searchParams, pathname, replace]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('category', value);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearchClick = () => {
    updateSearchParams();
  };

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
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione os Produtos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Todos">Todos os produtos</SelectItem>
                  <SelectItem value="Masculinos">Produtos masculinos</SelectItem>
                  <SelectItem value="Femininos">Produtos femininos</SelectItem>
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
                onChange={handleSearchChange}
                className="text-black"
              />
              <Search 
                className="text-black cursor-pointer" 
                onClick={handleSearchClick}
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
  )
}
