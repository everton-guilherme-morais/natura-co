"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import StarRating from '@/components/StarsRating';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";

export default function DetailsProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const { addToCart, cart } = useCart();
  const { toast } = useToast();
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Balm Pós-barba Multifuncional',
      brand: 'NATURA HOMEM',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/87e4cf1e-870b-427f-1b7a-5cbd28e05f00/public',
      stars: 1,
      discount: 20,
      category: 'Perfume',
      description: 'O Balm Pós-barba Multifuncional Natura Homem é perfeito para o homem que preza pela praticidade na rotina de cuidados. Sua fórmula 2 em 1 pode ser usada para acalmar a pele após o barbear ou como hidratante no dia a dia. Feito com Tecnologia DermoTech que cuida e fortalece a pele.',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Fabio Lima',
          comment: 'Ótimo pós barba',
          stars: 3,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 0,
      priceInitial: '27,90',
      priceWithDiscount: '19,90',
      goodToKnow: [{
        id: 0,
        description: ''
      }],
      stateProduct: 'Lançamento',
      sex: 'Masculino',
    },
    {
      id: 2,
      name: 'Body Splash Tododia Macadâmia',
      brand: 'TODODIA',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/8c54782f-eb35-4a03-91af-57d372e90100/public',
      stars: 3,
      discount: 20,
      category: 'Creme',
      description: 'Inspirada na combinação de notas surpreendentes traduzidas em fragrâncias irresistíveis, o Body Splash Macadâmia Natura Tododia é um convite para vestir seu corpo de frescor e leveza',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Cassio Silva',
          comment: 'Ótimo creme',
          stars: 3,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 0,
      priceInitial: '130,90',
      priceWithDiscount: '99,90',
      goodToKnow: [
        { id: 1, description: 'Produto vegano' },
        { id: 2, description: 'Sensação de frescor na pele' },
        { id: 3, description: 'Dia a Dia' },
        { id: 4, description: 'Floral leve' },
      ],
      stateProduct: 'Progressivo',
      sex: 'Feminino',
    },
    {
      id: 3,
      name: 'Desodorante Antitranspirante Roll on Tododia Cereja e Avelã',
      brand: 'TODODIA',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/ab70e870-fa54-44cc-5272-70fb643f5c00/public',
      stars: 5,
      discount: 20,
      category: 'Desodorante',
      description: 'Viva seu corpo livre e protegido. Complete seu cuidado diário com o desodorante roll-on Tododia, com ação prebiótica que ajuda no controle do mau odor e oferece proteção por até 48h',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Jon Silva',
          comment: 'Ótimo desodorante',
          stars: 3,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 0,
      priceInitial: '27,90',
      priceWithDiscount: '19,90',
      goodToKnow: [
        { id: 1, description: '' },
      ],
      stateProduct: '',
      sex: 'Feminino'
    },
    {
      id: 4,
      name: 'Ekos Frescor Maracujá Feminino',
      brand: 'EKOS',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/358e4dfa-c768-442c-4eb8-b8bc3b27d800/public',
      stars: 5,
      discount: 0,
      category: 'Desodorante colônia',
      description: 'Natura Ekos Maracujá oferece uma fragrância fresca e confortável, refrescante para os seus dias.',
      size: null,
      instalments: 3,
      assessments: [
        {
          id: 1,
          name: 'Everton Silva',
          comment: 'Ótima colônia',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 0,
      priceInitial: '113,90',
      priceWithDiscount: '113,90',
      goodToKnow: [
        { id: 1, description: 'Produto vegano' },
        { id: 2, description: 'Contém ativo da biodiversidade brasileira' },
        { id: 3, description: 'Dia a Dia' },
        { id: 4, description: 'Frutal leve' },
      ],
      stateProduct: 'progressivo',
      sex: 'Feminino'
    },
    {
      id: 5,
      name: 'Essencial Oud Feminino',
      brand: 'ESSENCIAL',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/8d214be4-5153-44e3-62a3-f930b0822600/public',
      stars: 5,
      discount: 0,
      category: 'Desodorante perfume',
      description: 'Descubra a essência única em cada gota da fragrância sofisticada do Deo Parfum Oud Essencial Feminino.',
      size: null,
      instalments: 3,
      assessments: [
        {
          id: 1,
          name: 'Marco Silva',
          comment: 'Ótimo desodorante',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 0,
      priceInitial: '259,90',
      priceWithDiscount: '259,90',
      goodToKnow: [
        { id: 1, description: 'Produto vegano' },
        { id: 2, description: 'Dura até 10h na pele' },
        { id: 3, description: 'Ocasiões especiais' },
        { id: 4, description: 'Amadeirado intenso' },
      ],
      stateProduct: 'progressivo',
      sex: 'Feminino'
    },
    {
      id: 6,
      name: 'Essencial Masculino',
      brand: 'ESSENCIAL',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/46cbb2f8-80cf-4d3f-c4d1-e73f5ff39b00/public',
      stars: 4,
      discount: 0,
      category: 'Desodorante perfume',
      description: 'Procurando por uma fragrância potente e com personalidade? Conheça o Essencial Deo Parfum Masculino Natura: sofisticado e intenso.',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Tulio Silva',
          comment: 'Ótimo perfume',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 0,
      priceInitial: '259,90',
      priceWithDiscount: '259,90',
      goodToKnow: [
        { id: 1, description: 'Produto vegano' },
        { id: 2, description: 'Dura até 10h na pele' },
        { id: 3, description: 'Ocasiões especiais' },
        { id: 4, description: 'Amadeirado intenso' },
      ],
      stateProduct: 'progressivo',
      sex: 'Masculino'
    },
    {
      id: 7,
      name: 'Ilía',
      brand: 'ILÍA',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/2deff770-d3d3-45cd-3504-59d4dc212400/public',
      stars: 4,
      discount: 0,
      category: 'Desodorante perfume',
      description: 'Ilia Deo Parfum Natura é uma fragrância floral que combina a intensidade das flores brancas com um complexo adocicado de baunilha e musk.',
      size: null,
      instalments: 5,
      assessments: [
        {
          id: 1,
          name: 'Jeff Santos',
          comment: 'Ótimo perfume',
          stars: 3,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 5,
      priceInitial: '173,90',
      priceWithDiscount: '173,90',
      goodToKnow: [
        { id: 1, description: 'Floral intenso' },
        { id: 2, description: 'Produto vegano' },
        { id: 3, description: 'Dura até 10h na pele' },
        { id: 4, description: 'Ocasiões especiais' },
      ],
      stateProduct: 'progressivo',
      sex: 'Feminino'
    },
    {
      id: 8,
      name: 'Refil Desodorante Corporal Kaiak Masculino',
      brand: 'KAIAK',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/0ba59f96-3243-4884-f881-3cf16f91a400/public',
      stars: 4,
      discount: 0,
      category: 'Desodorante corporal',
      description: 'O Desodorante Kaiak Masculino foi desenvolvido para manter você protegido e perfumado ao longo do dia, com fragrância inspirada nos maiores sucessos da perfumaria Natura',
      size: null,
      instalments: 5,
      assessments: [
        {
          id: 1,
          name: 'Jeff Santos',
          comment: 'Ótimo perfume',
          stars: 3,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '35,90',
      priceWithDiscount: '35,90',
      goodToKnow: [
        { id: 1, description: 'Dura até 10h na pele' },
      ],
      stateProduct: 'progressivo',
      sex: 'Masculino'
    },
    {
      id: 9,
      name: 'Refil Desodorante Corporal Kaiak Oceano Masculino',
      brand: 'KAIAK',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/e1b5f3bc-be6b-4f53-9fc1-2c7cdc073b00/public',
      stars: 4,
      discount: 30,
      category: 'Desodorante corporal',
      description: 'Não há nada melhor que a sensação de bem-estar e frescor que você sente quando se cuida.',
      size: null,
      instalments: 5,
      assessments: [
        {
          id: 1,
          name: 'Jeff Santos',
          comment: 'Ótimo perfume',
          stars: 3,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '35,90',
      priceWithDiscount: '25,10',
      goodToKnow: [
        { id: 1, description: 'Dura até 10h na pele' },
      ],
      stateProduct: 'progressivo',
      sex: 'Masculino'
    },
    {
      id: 10,
      name: 'Kaiak Urbe Masculino',
      brand: 'KAIAK',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/3578b6e5-34fc-40df-ac26-d426188be800/public',
      stars: 4,
      discount: 0,
      category: 'Desodorante corporal',
      description: 'Não há nada melhor que a sensação de bem-estar e frescor que você sente quando se cuida.',
      size: null,
      instalments: 0,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo perfume',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '172,90',
      priceWithDiscount: '172,90',
      goodToKnow: [
        { id: 1, description: 'Dura até 10h na pele' },
      ],
      stateProduct: 'progressivo',
      sex: 'Masculino'
    },
    {
      id: 11,
      name: 'Natura Homem Essence',
      brand: 'NATURA HOMEM',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/9d33e0d5-26b5-4207-1458-082e0a35db00/public',
      stars: 4,
      discount: 0,
      category: 'Desodorante corporal',
      description: 'Não há nada melhor que a sensação de bem-estar e frescor que você sente quando se cuida.',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo perfume',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '204,90',
      priceWithDiscount: '204,90',
      goodToKnow: [
        { id: 1, description: 'Dura até 10h na pele' },
      ],
      stateProduct: 'progressivo',
      sex: 'Masculino'
    },
    {
      id: 12,
      name: 'Natura Homem',
      brand: 'NATURA HOMEM',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/41d54cf4-f544-434b-3db6-fb1d4f273b00/public',
      stars: 4,
      discount: 0,
      category: 'Desodorante colônia',
      description: 'Natura Homem é o desodorante colônia masculino que entrega uma fragrância amadeirada equilibrada para todos os momentos.',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo perfume',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '184,90',
      priceWithDiscount: '184,90',
      goodToKnow: [
        { id: 1, description: 'Dura até 10h na pele' },
      ],
      stateProduct: 'progressivo',
      sex: 'Masculino'
    },
    {
      id: 13,
      name: 'Natura Homem Emocion.e',
      brand: 'NATURA HOMEM',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/fcce4c68-941a-4443-30f3-e2c664e45f00/public',
      stars: 4,
      discount: 0,
      category: 'Desodorante colônia',
      description: 'Procurando por uma fragrância potente e com personalidade? Conheça o Essencial Deo Parfum Masculino Natura: sofisticado e intenso.',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo perfume',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '269,90',
      priceWithDiscount: '188,90',
      goodToKnow: [
        { id: 1, description: 'Dura até 10h na pele' },
      ],
      stateProduct: 'lançamento',
      sex: 'Masculino'
    },
    {
      id: 14,
      name: 'Natura Mamãe e Bebê Momento Banho',
      brand: 'MAMÃE E BEBÊ',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/05879247-5414-4faf-7ee5-d9987dedba00/public',
      stars: 4,
      discount: 0,
      category: 'Presente',
      description: 'O Presente Natura Mamãe e Bebê Momento Banho traz um ritual de cuidado e carinho.',
      size: null,
      instalments: 5,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo perfume',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '183,10',
      priceWithDiscount: '152,90',
      goodToKnow: [
        { id: 1, description: 'Produtos veganos' },
        { id: 2, description: 'Acessório exclusivo' },
      ],
      stateProduct: '',
      sex: 'Ambos'
    },
    {
      id: 15,
      name: 'Natura Kaiak Masculino com Miniatura',
      brand: 'KAIAK',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/b150e80a-b99c-4932-7491-f0a781bf9000/public',
      stars: 4,
      discount: 0,
      category: 'Presente',
      description: 'O Presente Natura Kaiak Masculino com Miniatura é feito de escolhas que respeitam o oceano e traz um ritual de banho, barba e perfumação refrescante',
      size: null,
      instalments: 5,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo perfume',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '323,00',
      priceWithDiscount: '169,90',
      goodToKnow: [
        { id: 1, description: 'Produtos veganos' },
        { id: 2, description: 'Ritual de barba e perfumação' },
      ],
      stateProduct: '',
      sex: 'Masculino'
    },
    {
      id: 16,
      name: 'Natura Naturé Banho de Chuva',
      brand: 'NATURÉ',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/04fd2208-a80a-4a2b-342e-073c4e7d6700/public',
      stars: 4,
      discount: 20,
      category: 'Presente',
      description: 'O Presente Natura Naturé Banho de Chuva com Mochila Jacarezinho convida a criança a explorar o mundo lá fora.',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo presente',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '251,80',
      priceWithDiscount: '201,90',
      goodToKnow: [
        { id: 1, description: 'Produtos veganos' },
        { id: 2, description: 'Ritual de barba e perfumação' },
      ],
      stateProduct: '',
      sex: 'Ambos'
    },
    {
      id: 17,
      name: 'Presente Papai e Bebê',
      brand: 'PAPAI E BEBÊ',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/00e1eea9-ab2c-4f98-113a-8ff88d3be900/public',
      stars: 4,
      discount: 38,
      category: 'Presente',
      description: 'O Presente Natura Naturé Banho de Chuva com Mochila Jacarezinho convida a criança a explorar o mundo lá fora.',
      size: null,
      instalments: 4,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo presente',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '204,20',
      priceWithDiscount: '126,90',
      goodToKnow: [
        { id: 1, description: 'Produtos veganos' },
        { id: 2, description: 'Dermatologicamente testado' },
      ],
      stateProduct: '',
      sex: 'Ambos'
    },
    {
      id: 18,
      name: 'Sabonete em Barra Puro Vegetal Kaiak Masculino',
      brand: 'KAIAK',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/463bdf5e-db2d-49ad-a324-e62955089200/public',
      stars: 4,
      discount: 0,
      category: 'Presente',
      description: 'O Sabonete em Barra Puro Vegetal Kaiak Masculino foi desenvolvido para transformar seu banho em um verdadeiro mergulho.',
      size: null,
      instalments: 1,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo presente',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '13,80',
      priceWithDiscount: '13,80',
      goodToKnow: [
        { id: 1, description: 'Produtos veganos' },
        { id: 2, description: 'Dermatologicamente testado' },
      ],
      stateProduct: '',
      sex: 'Masculino'
    },
    {
      id: 19,
      name: 'Sabonete em Barra Puro Vegetal Tododia Algodão',
      brand: 'TODODIA',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/8192584e-e112-4741-e270-007975bb9800/public',
      stars: 4,
      discount: 0,
      category: 'Sabonete em barra',
      description: 'O Sabonete em Barra Tododia Algodão promove uma sensação agradável',
      size: null,
      instalments: 1,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo presente',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '31,40',
      priceWithDiscount: '31,40',
      goodToKnow: [
        { id: 1, description: 'Produtos veganos' },
        { id: 2, description: 'Dermatologicamente testado' },
      ],
      stateProduct: '',
      sex: 'Feminino'
    },
    {
      id: 20,
      name: 'Sabonete Líquido Cremoso para o corpo Banho nas Nuvens',
      brand: 'TODODIA',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/e999b0f5-21aa-48fc-2f38-a6c1ca093600/public',
      stars: 4,
      discount: 30,
      category: 'Sabonete líquido',
      description: 'Uma boa noite de sono é a melhor forma de começar o dia. Tododia Todanoite é uma linha que te ajuda a dormir melhor enquanto cuida da sua pele.',
      size: null,
      instalments: 1,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo presente',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '45,00',
      priceWithDiscount: '31,50',
      goodToKnow: [
        { id: 1, description: 'Produtos veganos' },
        { id: 2, description: 'Dermatologicamente testado' },
      ],
      stateProduct: 'lançamento',
      sex: 'Feminino'
    },
    {
      id: 21,
      name: 'Una Blush',
      brand: 'UNA',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/22ad3b1c-f19a-49f3-017d-6dcdfa72dd00/public',
      stars: 4,
      discount: 30,
      category: 'Perfume',
      description: 'Inspirado no elegante retorno do brilho à maquiagem e à perfumaria, o Deo Parfum Una Blush traz a sofisticação da flor de laranjeira e um toque único de breu branco',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo presente',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '292,90',
      priceWithDiscount: '204,90',
      goodToKnow: [
        { id: 1, description: 'Embalagem de edição especial' },
        { id: 2, description: 'Ideal para presentear' },
      ],
      stateProduct: 'lançamento',
      sex: 'Feminino'
    },
    {
      id: 22,
      name: 'Presente Natura Papai e Bebê com Tapete Mêsversário',
      brand: 'PAPAI E BEBÊ',
      imageCover: 'https://imagedelivery.net/mn4TQB7lrDmBdaPZ6NfFzA/d00b7b20-855c-4c59-a005-71ac56611d00/public',
      stars: 4,
      discount: 27,
      category: 'Presente Natura',
      description: 'Celebre cada momento da vida do seu bebê com o Presente Natura Papai e Bebê com Tapete Mêsversário. Com cheirinho de amor e aconchego.',
      size: null,
      instalments: 6,
      assessments: [
        {
          id: 1,
          name: 'Tomas Santos',
          comment: 'Ótimo presente',
          stars: 5,
          dateCommment: '24/07/2024'
        }
      ],
      quantity: 1,
      priceInitial: '284,20',
      priceWithDiscount: '206,90',
      goodToKnow: [
        { id: 1, description: 'Dermatologicamente testado' },
        { id: 2, description: 'Produtos veganos' },
      ],
      stateProduct: '',
      sex: 'Ambos'
    },
  ]

  useEffect(() => {
    const productId = parseInt(params.id, 10);
    const foundProduct = products.find((product) => product.id === productId);
    setProduct(foundProduct || null);

    if (foundProduct) {
      const isProductInCart = cart.some((item) => item.id === foundProduct.id);
      setIsInCart(isProductInCart);
    }
  }, [params.id, cart]);

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

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className='py-8 xl:py-9 container mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-0'>
        <div className='mx-auto xl:w-[600px] flex items-center justify-center'>
          <Image src={product.imageCover} alt='product' width={400} height={100} className='rounded-xl object-cover' />
        </div>
        <div className='flex flex-1 flex-col gap-4 items-start'>
          <h2 className='font-bold text-4xl'>{product.name}</h2>
          <p className='text-xs'>{product.brand}</p>
          <div className='rounded-3xl text-[10px] bg-[#194B73] text-white font-bold px-2 py-1'>{product.stateProduct}</div>
          <p className='text-lg font-semibold'>R$ {product.priceWithDiscount}</p>
          <StarRating stars={products[0].stars} />
          <p className='text-base text-gray-700'>{product.description}</p>

          <Button 
            size="lg" 
            className='w-60 mt-5' 
            disabled={loading || isInCart} 
            onClick={handleAddToCart}
          >
            <ShoppingBag className='mr-4 h-5 w-5' /> 
            {loading ? 'Adicionando...' : isInCart ? 'No carrinho' : 'Adicionar à sacola'}
          </Button>
        </div>
      </div>
    </div>
  );
}
