
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
    const newState = {...state}
    switch(action.type) {
        case ADD_CART:
            const add = newState[action.produceId]
            console.log(add)
            if (add){
                add.count++
            }else {
                newState[action.produceId] = { id: action.produceId, count: 1}
            }
            return newState
        case REMOVE_CART:
            const newCart = {...state}
            delete newCart[action.produceId]
            return newCart
        default:
            return state;
    }

}
