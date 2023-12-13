import React, { createContext, useReducer, useState } from 'react'
import { cartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();

const initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (payload)=>dispatch({
        type: 'ADD_TO_CART',
        payload,
    })

    const removeFromCart = (payload)=>dispatch({
        type: 'REMOVE_FROM_CART',
        payload,
    })

  return (
    <CartContext.Provider value={{
        addToCart,
        removeFromCart,
        cart: state,
    }}>
        {children}
    </CartContext.Provider>
  )
}
