import { useId, useState } from "react";
import { useCartStore } from "../../store/useCartStore";
import { AddIcon, CartIcon, SubstractIcon } from "../icons/Icons";
import { handleQuantities } from "../utils/handleQuantities";

export const ProductItem = ({ product }) => {
  /*   const { cart, addToCart, removeFromCart } = useContext(CartContext); */

  const ProductItemQuantityId = useId();
 
  const {cart} = useCartStore();

  const {
    handleAdd,
    handleSubs,
    quantity,
    handleQuantityChange,
    removeAllOfThis,
  } = handleQuantities();

  const productInCart = cart.some((cartProduct) => cartProduct.id === product.id);

  return (
    <li
      className={
        productInCart ? `grid-product-item active` : "grid-product-item"
      }
      key={product.id}
    >
      <picture>
        <img src={product.image} alt={product.title} />
      </picture>
      <strong>
        <p>{product.title}</p>
      </strong>
      <p>{product.price}$</p>

      <div className="buttons">
        {/*    <button className="btn btn-primary" onClick={()=>handleAdd(product)}><CartIcon/></button> */}

        <label htmlFor={ProductItemQuantityId}>Qty:</label>

        <input
          type="number"
          value={quantity}
          name="quantity"
          onChange={handleQuantityChange}
          id={ProductItemQuantityId}
        />
        <button className="add btn" onClick={() => handleAdd(product)}>
          <AddIcon />
        </button>

        {productInCart ? (
          <button
            className="remove btn"
            onClick={() => handleSubs(product, quantity)}
          >
            <SubstractIcon />
          </button>
        ) : null}

        {false && (
          <button className="btn" onClick={() => removeAllOfThis(product.id)}>
            <SubstractIcon />
          </button>
        )}
      </div>
    </li>
  );
};
