import { useId } from "react"
import { useCartStore } from "../../store/useCartStore";
import { CartIcon } from "../icons/Icons";

export const CartDisplay = () => {

    const inputCheckbox = useId();

    const { cart, addToCart, removeFromCart, removeAllOfThis } = useCartStore();

    const hasItemsInCart = cart.length>0;

  return (
    <div className="cart-display">
        <label className="cartIcon" htmlFor={inputCheckbox}>
            <CartIcon/>
        </label>
        <input className="cartCheckbox" type="checkbox" name="cartCheckbox" id={inputCheckbox} hidden />

        <aside className="cart-display-items hidden">
            <strong>ShoppingCart</strong>
            {
                hasItemsInCart? <ul>
                    {
                        cart.map((item)=>(
                            <li key={`${item.id}__${item.title}`}>
                                <picture>
                                    <img src={item.image} alt={item.title} />
                                </picture>
                                <p>{item.title}</p>
                                <p>{item.price}$</p>
                                <p>{item.quantity}</p>
                                <button onClick={()=>addToCart(item)}>+</button>
                                <button onClick={()=>removeFromCart(item.id)}>-</button>
                            </li>
                            ))
                    }
                </ul> : <></>
            }
        </aside>
    </div>
  )
}
