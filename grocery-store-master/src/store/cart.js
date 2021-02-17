
const ADD_CART = 'cart/ADD'
const REMOVE_CART = 'cart/REMOVE'

export const addToCart = (id) => {
    return {
        type: ADD_CART,
        produceId: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_CART,
        produceId: id
    }
}


export default function
cartReducer(state = {}, action) {
    switch(action.type) {
        case ADD_CART:
            return {...state, [action.produceId]: {id: action.produceId , count: 1}}
        case REMOVE_CART:
            const newCart = {...state}
            delete newCart.[action.produceId]
            console.log(newCart)
            return newCart
        default:
            return state;
    }

}
