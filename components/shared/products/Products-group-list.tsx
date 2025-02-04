import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/products/Product-card";
import React from "react";
import {ProductsGroupListProps} from "@/types/product";

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({products}) => {

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">Вы выбрали: {products[0].categoryName} </h1>

      <ul className={cn('grid grid-cols-5 gap-[20px]')}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            slug={product.slug}
            stockPrice={product.stockPrice}
            orderPrice={product.orderPrice}
            categorySlug={product.categorySlug}
            categoryName={product.categoryName}
            description={product.description}
            newPrice={0}
            image={product.images?.[0]}
          />
        ))}
      </ul>
    </section>
  );
};
