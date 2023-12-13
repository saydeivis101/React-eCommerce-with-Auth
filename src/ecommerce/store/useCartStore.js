import {create} from 'zustand';

const updateCart = (cart)=>{
  window.localStorage.setItem('cart', JSON.stringify(cart))
};

// Define el store con zustand
export const useCartStore = create((set) => ({
 
  cart: JSON.parse(localStorage.getItem('cart')) || [],

  addToCart: (product, quantity = 1) => set((state) => {
    const productInCart = state.cart.findIndex((p) => p.id === product.id);

    if (productInCart >= 0) {
      const cloneState = structuredClone(state.cart);
      cloneState[productInCart].quantity += quantity;

      if (cloneState[productInCart].quantity < 0) {
        cloneState[productInCart].quantity = 0;
      }

      if (cloneState[productInCart].quantity === 0) {
        const cart = state.cart.filter((p) => p.id !== product.id);
        set({ cart });
        updateCart(cloneState);
        return { cart };
      }

      set({ cart: cloneState });
      updateCart(cloneState);
      return { cart: cloneState };
    }

    const cart = [...state.cart, { ...product }];
    set({ cart });
    updateCart(cart);
    return { cart };
  }),

  removeFromCart: (productId, quantity=1) => set((state) => {

    const productInCart = state.cart.findIndex((p) => p.id === productId);

    if (productInCart >= 0) {
      const cloneState = structuredClone(state.cart);
      cloneState[productInCart].quantity -= parseInt(quantity, 10);

      if (cloneState[productInCart].quantity < 0) {
        cloneState[productInCart].quantity = 0;
      }

      if (cloneState[productInCart].quantity === 0) {
        const cart = state.cart.filter((p) => p.id !== productId);
        set({ cart });
        updateCart(cart);
        return { cart };
      }

      set({ cart: cloneState });
      updateCart(cloneState);
      return { cart: cloneState };
    }

    const cart = state.cart.filter((p) => p.id !== productId);
    set({ cart });
    updateCart(cart);
    return { cart };
  }),

  removeAllOfThis: (productId)=>set((state)=>{
    const withoutThisProduct = state.cart.filter((item)=> item.id !== productId);
    set({withoutThisProduct});
    updateCart(withoutThisProduct);
    return {withoutThisProduct}
  })
}));


