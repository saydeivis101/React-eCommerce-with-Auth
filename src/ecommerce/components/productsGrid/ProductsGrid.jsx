import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchProvider";
import { CartContext } from "../../context/CartProvider";

const ProductItem = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const productInCart = cart.some((cartProduct) => cartProduct.id === product.id);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
  };

  const handleAdd = () => {
    addToCart({ ...product, quantity });
  };

  const handleSubs = ()=>{
    
  }

  return (
    <li key={product.id}>
      <picture>
        <img src={product.image} alt={product.title} />
      </picture>
      <p>{product.title}</p>
      <p>{product.price}$</p>

      <div className="buttons">
        <button onClick={handleAdd}>Buy</button>

        <input
          type="number"
          value={quantity}
          name="quantity"
          onChange={handleQuantityChange}
        />
        <button className="add" onClick={handleAdd}>
          +
        </button>

        {productInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            -
          </button>
        ) : null}
      </div>
    </li>
  );
};

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
