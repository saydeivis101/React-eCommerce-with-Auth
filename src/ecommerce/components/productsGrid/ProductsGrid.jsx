import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchProvider";
import { useCartStore } from "../../store/useCartStore";
import { ProductItem } from "./ProductItem";
/* import { CartContext } from "../../context/CartProvider";
 */

export const ProductsGrid = () => {
  const { products } = useContext(SearchContext);
  const hasProducts = products.length > 0;

  return (
    <div className="container">
      {hasProducts ? (
        <ul className="products-grid">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <h5>There's no Products to Show...</h5>
      )}
    </div>
  );
};
