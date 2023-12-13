
const updateCart = (cart)=>{
    window.localStorage.setItem('cart', JSON.stringify(cart));
}

export const cartReducer = (state, action) => {
  
    const {payload:actionPayload, type:actionType} = action;

    if(actionType ==='ADD_TO_CART'){
        const productInCart = state.findIndex(product=> (product.id === actionPayload.id));

        if(productInCart >=0){
            const cloneState = structuredClone(state);
            cloneState[productInCart].quantity += actionPayload.quantity;
            const newState = [...cloneState]
            updateCart(newState)
            return newState;
        }

        const newState = [
            ...state,
            {
                ...actionPayload,
            }
        ]
        updateCart(newState)
        return newState;
    }

    if(actionType === 'REMOVE_FROM_CART'){
        const productInCart = state.findIndex(product=> (product.id === actionPayload.id));

        if(productInCart >=0){
            const cloneState = structuredClone(state);
            cloneState[productInCart].quantity -= parseInt(actionPayload.quantity);
            if (cloneState[productInCart].quantity < 0) {
                cloneState[productInCart].quantity = 0;
            }
            if(cloneState[productInCart].quantity === 0){
                const newState = state.filter(product => product.id != actionPayload.id);
                updateCart(newState)
                return newState;
            }
            const newState = [...cloneState]
            updateCart(newState)
            return newState;
        }

        const newState = state.filter(product => product.id != actionPayload.id);
        updateCart(newState)
        return newState;

    }

}
