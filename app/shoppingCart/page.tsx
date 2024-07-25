import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { ArrowRight, Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"

export default function ShoppingCart(){

  const productsCart = [
    {
      id: 1,
      name: 'Frescor azul',
      price: '145,00',
      quantity: 1,
      image: '/images/perfume-essencial-1.jpg'
    },
    {
      id: 2,
      name: 'Frescor azul',
      price: '145,00',
      quantity: 1,
      image: '/images/perfume-essencial-1.jpg'
    },
    {
      id: 3,
      name: 'Frescor azul',
      price: '145,00',
      quantity: 1,
      image: '/images/perfume-essencial-1.jpg'
    },
    {
      id: 4,
      name: 'Frescor azul',
      price: '145,00',
      quantity: 1,
      image: '/images/perfume-essencial-1.jpg'
    },
    {
      id: 5,
      name: 'Frescor azul',
      price: '145,00',
      quantity: 1,
      image: '/images/perfume-essencial-1.jpg'
    },
  ]
  
  return (
    <section className="container mx-auto">
      <div>
        <h1 className="font-bold text-4xl pb-10">Seu carrinho</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-20">
          <div className="border border-gray-300 rounded-xl h-auto w-auto sm:w-[630px] "> 
            {productsCart.map((item, index) => {
              return (
                <>
                  <div key={index} className="flex flex-row items-center justify-between h-28 p-5">
                    {/* Image and informations */}
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <Image src={item.image} alt="" width={90} height={90} className="rounded-xl"/>
                        <div className="flex flex-col items-start justify-between">
                          <h2 className="font-bold">{item.name}</h2>
                          <h2 className="font-bold">R$ {item.price}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end h-full justify-between">
                      <Trash2 className="w-4 h-4 text-red-400 cursor-pointer"/>
                      <div className="w-20 h-6 px-2 flex flex-row items-center justify-between bg-gray-200 rounded-xl bg-transparent">
                        <Minus className="w-3 h-3 cursor-pointer"/>
                        <p>2</p>
                        <Plus className="w-3 h-3 cursor-pointer"/>
                      </div>
                    </div>
                  </div>
                  <Separator className="bg-gray-300" />
                </>
              )
            })}
          </div>
          <div className="border border-gray-300 rounded-xl h-96 w-[auto] max-w-[450px] p-5"> 
            <div className="flex flex-col items-start justify-between">
              <p className="text-xl font-bold">Sumário</p>
              <div className="flex flex-1 flex-row items-center py-1 justify-between w-full">
                <p className="text-[#D3D3D3]">Subtotal</p>
                <b>R$ 805,00</b>
              </div>
              <div className="flex flex-1 flex-row items-center py-1 justify-between w-full">
                <p className="text-[#D3D3D3]">Desconto (-20%)</p>
                <b className="text-red-500">- R$ 805,00</b>
              </div>
              <div className="flex flex-1 flex-row items-center py-1 justify-between w-full">
                <p className="text-[#D3D3D3]">Frete</p>
                <b>R$ 805,00</b>
              </div>
              <Separator className="my-4 bg-gray-300" />

              <div className="flex flex-1 flex-row items-center py-1 justify-between w-full">
                <p className="">Total</p>
                <b className="text-lg">R$ 805,00</b>
              </div>
              <div className="flex flex-1 flex-row items-center py-1 gap-3 w-full">
                <Input type="email" placeholder="O que está buscando hoje ?" />
                <Button className="rounded-full">Aplicar</Button>
              </div>
            </div>
            <Button className="bg-orange-400 text-white w-full items-center rounded-full mt-5 gap-3">Finalizar compra <ArrowRight className="w-4 h-4"/></Button>
          </div>
        </div>
      </div>
    </section>
  )
}