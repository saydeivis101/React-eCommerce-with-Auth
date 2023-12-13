import { useState } from "react";
import { useCartStore } from "../../store/useCartStore";

  export const handleQuantities = (product) => {

    const { addToCart, removeFromCart, removeAllOfThis } = useCartStore();

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value, 10);
      setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
    };

    const handleAdd = (product) => {
        addToCart( product, quantity );
      };
    
      const handleSubs = (product)=>{
        const {id} = product;
        removeFromCart(id, quantity)
      }
    
    return {
      handleAdd,
      handleSubs,
      quantity,
      handleQuantityChange,
      removeAllOfThis
    }
  }
  
    