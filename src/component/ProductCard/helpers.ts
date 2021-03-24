
import { Product } from "../../pages/Orders/types";

export function checkIsSelected( selectedProducts: Product[], product: Product){
  return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number){
  const fotmatter = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
  return fotmatter.format(price);
}