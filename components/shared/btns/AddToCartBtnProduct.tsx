'use client';

import React from "react";
import {ShoppingCart} from "lucide-react";
import {useCart} from "@/context/CartContext";
import {cn} from "@/lib/utils";
import {Product} from "@/types/types";
import {ClassName} from "@/types/types";

interface AddToCartButtonProps extends ClassName {
  product: Product;
}

export const AddToCartBtnProduct: React.FC<AddToCartButtonProps> = ({product, className}) => {
  const {addToCart, cart} = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <button
      className={cn(
        "relative flex items-center justify-center rounded-3xl text-white bg-[var(--violet)] transition-colors py-3 px-4",
        "hover:cursor-pointer hover:bg-[var(--violet)]/30 hover:text-[var(--violet)] hover:[&>svg]:text-[var(--violet)]",
        className
      )}
      onClick={() => addToCart(product)}
    >
      <ShoppingCart className="w-5 h-5 mr-3 text-white transition-colors"/>
      {quantity > 0 && (
        <span
          className="absolute top-[-5px] right-[-5px] w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center">
          {quantity}
        </span>
      )}

      Заказать
    </button>
  );
};
