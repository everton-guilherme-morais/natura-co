export interface Product {
  id: number;
  name: string; /*Nome*/
  brand: string; /*Marca*/
  imageCover: string; /*Imagem principal*/
  stars: number; /*Estrelas*/
  discount?: number; /*Desconto*/
  category: string; /*Categoria*/
  description: string; /*Descrição*/
  size?: string | null; /*Tamanho*/
  instalments: number; /*Parcelas*/
  assessments?: {
    id: number, name: string, comment: string, stars: number, dateCommment: string,
  }[]; /*Avaliações*/
  goodToKnow?: { id: number; description: string }[]; /*É bom você saber*/
  priceInitial: string, /*Preço inicial (sem desconto)*/
  priceWithDiscount: string, /*Preço com desconto*/
  quantity: number; /*Quantidade*/
  stateProduct?: string, /*Estado do produto*/
  sex: string
}