import React from "react";
import { products } from "../../mocks/products.json";

export const ProductsGrid = () => {
  const hasProducts = products.length > 0;

  return (
    <div className="container">
      {hasProducts ? (
        <ul className="products-grid">
          {products.map((product) => (
            <li key={product.id}>
              <picture>
                <img src={product.thumbnail} alt={product.title} />
              </picture>
              <p>{product.title}</p>
              <p>{product.price}$</p>

              <div className="buttons">
                <button>Buy</button>
                <button>+</button>
                <button>-</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h5>There's no Products to Show...</h5>
      )}
    </div>
  );
};
