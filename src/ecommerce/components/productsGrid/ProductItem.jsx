import { useState } from "react";
import { useCartStore } from "../../store/useCartStore";

export const ProductItem = ({ product }) => {
    /*   const { cart, addToCart, removeFromCart } = useContext(CartContext); */
      const { cart, addToCart, removeFromCart, removeAllOfThis } = useCartStore();

      const [quantity, setQuantity] = useState(1);
    
      const productInCart = cart.some((cartProduct) => cartProduct.id === product.id);
    
      const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
      };
    
      const handleAdd = (product) => {
        addToCart({ product, quantity });
      };
    
      const handleSubs = (product)=>{
        removeFromCart({product, quantity})
      }
    
      return (
        <li key={product.id}>
          <picture>
            <img src={product.image} alt={product.title} />
          </picture>
          <p>{product.title}</p>
          <p>{product.price}$</p>
    
          <div className="buttons">
            <button onClick={()=>handleAdd(product)}>Buy</button>
    
            <input
              type="number"
              value={quantity}
              name="quantity"
              onChange={handleQuantityChange}
            />
            <button className="add" onClick={()=>handleAdd(product)}>
              +
            </button>
    
            {productInCart ? (
              <button className="remove" onClick={() => handleSubs(product, quantity)}>
                -
              </button>
            ) : null}
    
            <button onClick={()=>removeAllOfThis(product.id)}>Remove All</button>
          </div>
        </li>
      );
    };