import Image from "next/image"
import Link from "next/link"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import {ShoppingCart, CircleUser} from 'lucide-react'
import { Separator } from "./ui/separator"

export default function Header() {
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione os Produtos" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="grapes">Todos os produtos</SelectItem>
                <SelectItem value="apple">Perfumes masculinos</SelectItem>
                <SelectItem value="banana">Perfumes femininos</SelectItem>
                <SelectItem value="blueberry">Cremes corporais</SelectItem>
                <SelectItem value="pineapple"></SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
          <div className="flex flex-1 items-center gap-5">
            <Input type="email" placeholder="O que está buscando hoje ?" />
            <Link href="/shoppingCart" className="flex items-center justify-between">
              <ShoppingCart className="text-black" cursor={"pointer"}/>
              <p className="text-base pb-5 text-black font-bold">5</p>
            </Link>
            <Link href="/">
              <CircleUser className="text-black" cursor={"pointer"}/>
            </Link>
          </div>
        </div>
        <Separator className="my-4 bg-gray-300" />
      </header>
    </>
  )
}